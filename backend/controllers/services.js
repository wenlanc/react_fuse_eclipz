const Sequelize = require('sequelize');
const Bcrypt = require("bcryptjs");
const Service = require('../models/service');
const sequelize = require('../database/database');
const Domain = require('../models/domain');
const App = require('../models/app');
const GwGroup = require('../models/gw_group');
const GwGroupMember = require('../models/gw_group_member');
const Session = require('../models/session');
const Enclave = require('../models/enclave');
var nconf = require('nconf');
var generator = require('generate-password');
const fs = require('fs');
const ClientUser = require('../models/clientuser');
const nodemailer = require('nodemailer');
const Settings = require('../models/settings');
const QRCode = require('qrcode');
const { sendEmail } = require('../_helpers/utils');

const getAllServices = async (req, res, next) => {
    let where_domain_cond = { status: {[Sequelize.Op.not]:'D'} };
    if( !req.user.dataValues.issuperadmin ) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'} ;
    } else {
        if( req.query.domain_id )
        {
            where_domain_cond = { "domain_id": req.query.domain_id, status: {[Sequelize.Op.not]:'D'} } ;
        }
    }

    Service.findAll({ 
        //attributes: { exclude: ['row_password'] }, 
        where: where_domain_cond,
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ],
        include: [{
            model: Domain,
        }]
     }).then( async (serviceLists) => {        
        var newList = await Promise.all(
            serviceLists.map(async service => {
                service.dataValues.password = ''
                let groups = await sequelize.query("SELECT gw_group_members.*, gw_groups.name FROM gw_group_members LEFT JOIN gw_groups ON gw_group_members.gw_group_id = gw_groups.id where gw_group_members.gateway_id = $id and gw_groups.status = 'A';",
                    { bind: { id: service.id }, type: Sequelize.QueryTypes.SELECT }
                )
    
                if (groups && groups.length){
                    service.dataValues.group_names = groups.map( group => group.name );
                }
                return service;
            })
        );
        res.send({
            services: newList
        });
    });
}

const getService = async (req, res, next) => {
    // If name is provided, name + domainId will be used instead of id
    let where_service_cond = {}
    if (req.query.serviceId)
        where_service_cond = { id: req.query.serviceId } // , status: 'A'
    else if (req.query.serviceName)
        where_service_cond = { name: req.query.serviceName, domain_id: req.user.domain_id } // , status: 'A'
        
    let where_domain_cond = {'status': 'A'};
    let domain_list = [];
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'};
    } else {
        domain_list = await Domain.findAll({ 
            where: {'status':'A'},
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
         });
    }

    Service.findOne({
        where: where_service_cond,
        include: [{
            model: Domain,
        }]
    }).then(async service => {
        if (service) {
            // Service exists
            const domain_list = await Domain.findAll({ 
                where: { 'status': 'A' },   // {[Sequelize.Op.not]:'D'}
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
             });

            const group_list = await GwGroup.findAll({ 
                where: where_domain_cond,
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
            }); 

            const groups = await GwGroupMember.findAll({ 
                where: { gateway_id : service.id }
            });
            service.dataValues.group_list = group_list;
            service.dataValues.group_ids = groups.map( item => item.gw_group_id );

            const sessions_recent = await Session.findAll({
                where : { role : "S", uid : service.id},
                order: [["start_time","DESC"]], 
                limit: 5, 
                offset: 0, 
             })
            service.dataValues.sessions_recent = sessions_recent;

            let enclave_list = await Enclave.findAll({ 
                where: {
                    responder_uid: service.id
                },
                limit : 5,
                offset : 0,
                order: [["start_time","DESC"]], 
                include: [{
                    model: ClientUser
                }] 
            })
            service.dataValues.enclave_list = enclave_list;    

            let bytes_total = await sequelize.query("SELECT SUM(responder_rxbytes) as total_rx,SUM(responder_txbytes) as total_tx FROM enclaves where responder_role LIKE $role and responder_uid=$service_id group by responder_uid",
            { bind: { role: 'S', service_id:service.id }, type: Sequelize.QueryTypes.SELECT });
            if (bytes_total.length) {
                service.dataValues.bytes_total = bytes_total[0];
            } else {
                service.dataValues.bytes_total =  { "total_rx": 0 , "total_tx": 0};
            }
            //service.dataValues.row_password = '';
            service.dataValues.password = '';
            service.dataValues.domain_list = domain_list;
            return res.send( service.dataValues );
        } else {
            return res.send({ error: 'Service dosnt exist...' });
        }
    })
}

const saveService = async (req, res, next) => {
    let domain_list = [];
    let where_domain_cond = {'status': 'A'};
    if (req.user.dataValues.issuperadmin) {
        domain_list = await Domain.findAll({ 
            where: { 'status':'A' },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
         });
    } else {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status': 'A'} ;
    }
    let isUpdated = false;
    let { id, name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip, group_ids } = req.body;
    if (!name) {
        return res.send({ error: 'Service name must be provided' });
    }

    let row_password = "";  
    let password_generate = true;
    let isEmailNotification = false;
    try {
        //nconf.argv().env()
        nconf.file('file', { file: `./config/config_${req.user.domain_id}.json` });
        password_generate = nconf.get('password_generate');
        //isEmailNotification = nconf.get('isEmailNotification');
    } catch (e) {
        let settings =await Settings.findOne( { where:{ domain_id:req.user.domain_id, key:"password_generate"} });
        if(settings) {
            password_generate = settings.value;
        }
	}

    if (password_generate) {
        password = generator.generate({
            length: 15,
            numbers: true,
            symbols : true
        });
        row_password = password;
        password = Bcrypt.hashSync(password, 10);
    } else {
        if (password) {
            row_password = password;
            password = Bcrypt.hashSync(password, 10);
        } else {
    
        } 
    }

    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }
    
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    // If name is provided, name + domainId will be used instead of id
    where_service_cond = {id: id}
    if ((domain_id > 0) && (id == 0)) {
        where_service_cond = {domain_id: domain_id, name: name}
    }

    Service.findOne({ 
        where: where_service_cond
    }).then(async service => {
        if (service) {
            // service exist
            if (password_generate) { 
                password = undefined;
                row_password = undefined;
            } else {
                if (password) {
                    
                } else {
                    password = undefined;
                    row_password = undefined;
                } 
            }

            let sameservice = await Service.findOne({ where: { name, domain_id, id: {[Sequelize.Op.not]:id} }}); 
            if(sameservice){
                return res.send({ error: 'Gateway Name is already in use on the same domain...' });
            } 

            const result = await Service.update( { name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip }, {
                where: {
                  id
                },
                returning: true,
            });

            await GwGroupMember.destroy({
                where: { gateway_id : id },
               // truncate: true
            });

            isUpdated = true;  
        } else {

            service = new Service({
                name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip
            })

            try {
                const savedService = await service.save();
                id = savedService.dataValues.id;
    
                // adding new app
                let app = new App({
                    name, status, service_id: id, allowed_ips : ''
                });
                const savedApp = await app.save();
                let app_id = savedApp.dataValues.id;
            } catch (error) {
                // Failed to create service   
                return res.send(error)
            }
        }

        // Group adding for created service
        if (Array.isArray(group_ids)) {
            for (var group_id of group_ids) {
                let group_member = new GwGroupMember({
                    gateway_id : id , gw_group_id : group_id
                })
                
                try {
                    await group_member.save();
                } catch (error) {
                    // skip
                }
            }  
        }    
                  
        const group_list = await GwGroup.findAll({ 
            where: where_domain_cond,
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });

        const groups = await GwGroupMember.findAll({ 
            where: { gateway_id : id }
        });
        
        Service.findOne({
            where: { id },
            include: [{
                model: Domain,
            }]
            }).then(service => {
            if (service) {
                // service exist
                service.dataValues.password="";
                //service.dataValues.row_password = '';
                service.dataValues.domain_list = domain_list;
                //service.dataValues.isUpdated = isUpdated;
                service.dataValues.group_list = group_list;
                service.dataValues.group_ids = groups.map( item => item.gw_group_id );

                if(!isUpdated && isEmailNotification && false) {

                    //Json download
                    let templateJson = fs.readFileSync('public/templates/sample.json');
                    let tempData = JSON.parse(templateJson);
                    tempData["client"]["name"] = service.name;
                    tempData["client"]["domain"] = service.domain.name;
                    tempData["client"]["password"] =  service.password;  
                    tempData["client"]["role"] = "S";   // “U” for Clients, and “S” for Gateways

                    var json = JSON.stringify(tempData);
                    var filename = service.name + '.json';
                    const userEmail = req.user.email?req.user.email:(req.user.name + '@' + req.user.domain.name);
                    sendEmail(
                        req.user.domain_id,
                        {
                            app_link:`wgp://eclipz.io/${Buffer.from(json).toString('base64')}`,
                            host: 'https:\/\/' + req.headers.host,
                        }, 
                        'create',
                        userEmail,
                        'New Gateway Created',
                        [
                            {   // utf-8 string as an attachment
                                filename: filename,
                                content: json
                            }
                        ],
                        function(err){
                        }
                    );
                }

                return res.send( service.dataValues );
            } else {
                return res.send({ error: 'Service doesn\'t exist...' });
            }
        })

    });
}

const renameService = async (req, res, next) => {
    let { id, name, new_name, domain_id } = req.body;
    if (!new_name) {
        return res.send({ error: 'New name (new_name) must be provided' });
    }

    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }
    
    if (!domain_id) {
        return res.send({ error: 'Domain ID (domain_id) must be provided' });
    }
    
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    // If name is provided, name + domainId will be used instead of id
    let where_service_cond = {}
    if (id > 0)
        where_service_cond = { id: id }
    else
        where_service_cond = { name: name, domain_id: domain_id }

    Service.findOne({ 
        where: where_service_cond
    }).then(async service => {
        if (service) {
            // Service exist
            if (id == 0) id = service.id;
            const result = await Service.update( { name: new_name }, {
                where: {
                  id
                },
                returning: true,
                plain: true
            });            
            return res.send( result[1].dataValues );
        } else {
            return res.send({ error: 'Service doesn\'t exist...' });            
        }
    });    
}

const deleteServices =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await Service.findOne({ where: { id: id }}).then( async service => {
            if(service){
                // service exist
                await App.update( {  status : 'D' }, {
                    where: {
                      service_id : service.id
                    },
                    returning: true,
                  });
                await Service.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+service.name, }, {
                    where: {
                        id
                    },
                    returning: true,
                });
            }else{

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}

const deleteService =  async (req, res, next) => {
    await Service.findOne({ 
        where: { name: req.params.name, domain_id: req.user.domain_id }
    }).then( async service => {
        if (service) {
            // service exist
            await App.update( {  status : 'D' }, {
                where: {
                  service_id : service.id
                },
                returning: true,
              });

            await Service.update({ status: 'D', name: '__DELETED__' + Date.now() + '__' + service.name, }, {
                where: {
                    id:service.id
                },
                returning: true,
            });
        } else {
            console.log('No such service')
        }
    })    
    return res.send({ message: 'Deleted...' });
}

const downloadTemplate = async (req, res, next) => { 
    Service.findOne({
        where: { id: req.body.serviceId },
        include: [{
           model: Domain,
       }]
       }).then(async service => {
       if(service){
           //Json download
            let templateJson = fs.readFileSync('public/templates/sample.json');
            let tempData = JSON.parse(templateJson);
            tempData["client"]["name"] = service.name;
            tempData["client"]["domain"] = service.domain.name;
            tempData["client"]["password"] =  service.password;  //service.password;
            tempData["client"]["role"] = "S";   // “U” for Clients, and “S” for Gateways

            var json = JSON.stringify(tempData);
            var filename = service.name + '.json';
            var mimetype = 'application/json';
            //res.setHeader('Content-Type', mimetype);
            //res.setHeader('Content-disposition','attachment; filename='+filename);
            res.send(json);
       }else{
           return res.send({ error: 'Service dosnt exist...' });
       }
   })
}

const emailTemplate = async (req, res, next) => { 
    Service.findOne({
        where: { id: req.body.serviceId },
        include: [{
           model: Domain,
       }]
       }).then(async service => {
       if(service){
           //Json download
           try {
                let templateJson = fs.readFileSync('public/templates/sample.json');
                let tempData = JSON.parse(templateJson);
                tempData["client"]["name"] = service.name;
                tempData["client"]["domain"] = service.domain.name;
                tempData["client"]["password"] =  service.password;  
                tempData["client"]["role"] = "S";   // “U” for Clients, and “S” for Gateways

                var json = JSON.stringify(tempData);
                var filename = service.name + '.json';
                const userEmail = req.user.email?req.user.email:(req.user.name + '@' + req.user.domain.name);
                const serviceEmail = service.email?service.email:(service.name+'@'+service.domain.name);
                let qrcode= await QRCode.toDataURL(json, { margin : 7, width : 700 });  
                sendEmail(
                    req.user.domain_id,
                    {
                        app_link:Buffer.from(json).toString('base64'),
                        host: 'https:\/\/' + req.headers.host,
                        qr_img_url: qrcode,
                    }, 
                    'create',
                    serviceEmail,
                    'Welcome to Eclipz',
                    [
                        {   // utf-8 string as an attachment
                            filename: filename,
                            content: json
                        }
                    ],
                    function(err){
                        if (err) { 
                            return res.send({ message: 'Failed to send with incorrect or empty email...' }); 
                        }
                        return res.send({ message: 'Email sent.' }); 
                    }
                );
            } catch (error) {
                return res.send({ message: 'Sample JSON file doesn\'t exist...' });                
            } 
       }else{
           return res.send({ message: 'Service dosnt exist...' });
       }
   })
}

const getService2 = async (req,res,next) => {
    Service.findOne({
        where: { name: req.params.name },
        include: [{
           model: Domain,
       }]
       }).then(async service => {
       if (service) {
           // service exist
           return res.send( service.dataValues );
       } else {
           return res.send({ error: 'Service doesn\'t exist...' });
       }
   })
}


const groupService = async (req, res, next) => {
    let { id, name, group_name, action, domain_id } = req.body;
    if (!group_name) {
        return res.send({ error: 'Group name (group_name) must be provided' });
    }

    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }
    
    if (!domain_id) {
        return res.send({ error: 'Domain ID (domain_id) must be provided' });
    }
    
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    // If name is provided, name + domainId will be used instead of id
    let where_service_cond = {}
    if (id > 0)
        where_service_cond = { id: id }
    else
        where_service_cond = { name: name, domain_id: domain_id }

    Service.findOne({ 
        where: where_service_cond
    }).then(async service => {
        if (service) {
            // User exists
            if (id == 0) id = service.id;

            const group = await GwGroup.findOne({
                where: {name: group_name},
            })
            
            if (!group)
                return res.send({ error: 'Group doesn\'t exist...' });    

            if (action == 'add') {
                let member = new GwGroupMember({
                    gateway_id : id , gw_group_id : group.id, status: 'A'
                })

                try {
                    await member.save();                    
                } catch (error) {
                    
                }
                
                return res.send({ message: 'Added to group ...' })
            }
            else if (action == 'remove') {
                GwGroupMember.destroy({
                    where: {gateway_id: id, gw_group_id: group.id}
                })
                return res.send({ message: 'Removed from group ...' })
            }
        } else {
            return res.send({ error: 'User doesn\'t exist...' });            
        }
    });    
}

module.exports = { getAllServices, getService, saveService, renameService, deleteServices, deleteService,getService2, downloadTemplate, emailTemplate, groupService };

