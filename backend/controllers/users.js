const Sequelize = require('sequelize');
const Bcrypt = require("bcryptjs");
const ClientUser = require('../models/clientuser');
const sequelize = require('../database/database');
const Domain = require('../models/domain');
const GroupMember = require('../models/group_member');
const Group = require('../models/group');
const App = require('../models/app');
const UserApp = require('../models/userapp');
const Service = require('../models/service');
const Session = require('../models/session');
const Settings = require('../models/settings');
const Enclave = require('../models/enclave');
var generator = require('generate-password');
var nconf = require('nconf');
const QRCode = require('qrcode');
const { authenticator } = require('otplib');
const fs = require('fs');
const { sendEmail } = require('../_helpers/utils');

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
  };

const getAllUsers = async (req, res, next) => {

    const { page, size, search_text, sort_column, sort_direction, domain_id } = req.query;
    const { limit, offset } = getPagination(page, size);

    let where_domain_cond = { };
    
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'} ;
    } else {
        if(domain_id) {
            where_domain_cond = { "domain_id": domain_id } ;
        }
        where_domain_cond.status = {[Sequelize.Op.not]:'D'};
    }

    if (search_text) {
        where_domain_cond.name = { [Sequelize.Op.like]: "%" + search_text + "%" }
    }

    
    let sort_cond = [];
    if( sort_column && sort_column!='null' ) {
        if( sort_column == "domains") {
            sort_cond.push([ { model: Domain } , 'name', sort_direction]);
        } else {
            sort_cond.push([sort_column, sort_direction]);
        }
    } else {
        sort_cond.push(['id', 'DESC']);
        sort_cond.push(['name', 'ASC']);
    }

    // Sequalize raw query for pagination 
    /*
    sequelize.query('SELECT * FROM matches JOIN public."Games" ON (matches.match_id = public."Games".id) ORDER BY public."Games".id DESC LIMIT :page * :size, :size', {
    replacements: {
        page: page,
        size: size
    },
    type: 'SELECT'
    })
    */

    ClientUser.findAndCountAll({ 
        where: where_domain_cond,
        limit,
        offset,
        order: sort_cond,
        include: [{
                model: Domain,
                attributes:['name'],
                required: true,
                where: {
                    status: {[Sequelize.Op.not]:'D'}
                }
            }] 
        })
    .then( async data => {      
        const { count: totalItems, rows: userLists } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / limit);

        var newList = await Promise.all(userLists.map( async  user => { 
            let groups = await sequelize.query("SELECT group_members.*, user_groups.name FROM group_members LEFT JOIN user_groups ON group_members.group_id = user_groups.id where group_members.user_id = $id and user_groups.status <> 'D';",
                { bind: { id: user.id }, type: Sequelize.QueryTypes.SELECT }
            )
            if (groups && groups.length){
                user.dataValues.group_names = groups.map( group => group.name );
            }
            // Hide the password
            user.dataValues.password = ""
            return user;
        }));

        res.send({
            users: newList, currentPage, totalPages, totalItems
        });

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving."
      });
    });

    // ClientUser.findAll({ 
    //     where: where_domain_cond,
    //     order: [
    //         ['id', 'DESC'],
    //         ['name', 'ASC'],
    //     ],
    //     include: [{
    //         model: Domain,
    //         // where: {
    //         // }
    //     }]
    //  }).then( async (userLists) => {

    //     var newList = await Promise.all(userLists.map( async  user => { 
    //         let groups = await sequelize.query('SELECT group_members.*, user_groups.name FROM group_members LEFT JOIN user_groups ON group_members.group_id = user_groups.id where group_members.user_id = $id;',
    //             { bind: { id: user.id }, type: Sequelize.QueryTypes.SELECT }
    //         )

    //         if(groups && groups.length){
    //             user.dataValues.group_names = groups.map( group => group.name );
    //         }
    //         return user;
    //     }));

    //     res.send({
    //         users: newList
    //     });
    // });
}

const getUser = async (req, res, next) => {
    let where_domain_cond = {status:{[Sequelize.Op.not]:'D'}};
    let domain_list = [];
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'} ;
    } else {
        domain_list = await Domain.findAll({ 
            where: { status: {[Sequelize.Op.not]:'D'} },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
         });
    }

    // If name is provided, name + domainId will be used instead of id
    let where_user_cond = {}
    if (req.query.userId)
        where_user_cond = { id: req.query.userId }
    else if (req.query.userName)
        where_user_cond = { name: req.query.userName, domain_id: req.user.domain_id }

    ClientUser.findOne({
        where: where_user_cond,
        include: [{
            model: Domain,
        }]
    }).then(async user => {
        if (user) {
            // User exists
            const group_list = await Group.findAll({
                where: where_domain_cond,
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
            });

            const groups = await GroupMember.findAll({
                where: { user_id: user.id }
            });

            const app_list = await App.findAll({
                where: { status: { [Sequelize.Op.not]: 'D' } },
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ],
                include: [{
                    model: Service,
                    required: true,
                    where: where_domain_cond
                }]
            });

            const apps = await UserApp.findAll({
                where: { user_id: user.id, status:{[Sequelize.Op.not]:'D'} }
            });

            const sessions_recent = await Session.findAll({
                where : { role : "U", uid : user.id},
                order: [["start_time", "DESC"]], 
                limit: 5, 
                offset: 0, 
            })
            user.dataValues.sessions_recent = sessions_recent;

            let bytes_total = await sequelize.query("SELECT SUM(initiator_rxbytes) as total_rx,SUM(initiator_txbytes) as total_tx FROM enclaves where initiator_role LIKE $role and initiator_uid=$user_id group by initiator_uid",
            { bind: { role: 'U', user_id:user.id }, type: Sequelize.QueryTypes.SELECT });
            if (bytes_total.length) {
                user.dataValues.bytes_total = bytes_total[0];
            } else {
                user.dataValues.bytes_total =  { "total_rx": 0 , "total_tx": 0 };
            }

            let enclave_list = await Enclave.findAll({ 
                where: {
                    initiator_uid: user.id
                },
                limit : 5,
                offset : 0,
                order: [["start_time", "DESC"]], 
                include: [{
                    model: Service
                }] 
            })
            user.dataValues.enclave_list = enclave_list;
            user.dataValues.password = "";
            user.dataValues.domain_list = domain_list;
            user.dataValues.group_list = group_list;
            user.dataValues.group_ids = groups.map( item => item.group_id );
            user.dataValues.app_list = app_list;
            user.dataValues.app_ids = apps.map( item => item.app_id );
            return res.send( user.dataValues );
        } else {
            return res.send({ error: 'User doesn\'t exist...' });
        }
    })
}

const saveUser = async (req, res, next) => {
    let where_domain_cond = {};
    let domain_list = [];
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status': 'A'} ;
    } else {
        domain_list = await Domain.findAll({ 
            where: { },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });
    }

    let { id, name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip, group_ids, app_ids } = req.body;
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    if (!name) {
        return res.send({ error: 'Username must be provided' });
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
    
    let isUpdated = false;

    ClientUser.findOne({ 
        where: { id: id }
    }).then(async user => {
        if (user) {
            // User exist
            if (id == 0) id = user.id;

            if(password_generate) { 
                password = undefined;
                row_password = undefined;
            } else {
                if(password){
                    
                } else {
                    password = undefined;
                    row_password = undefined;
                } 
            }

            let sameclinet = await ClientUser.findOne({ where: { name, domain_id, id: {[Sequelize.Op.not]:id} }}); 
            if(sameclinet){
                return res.send({ error: 'Client Name is already in use on the same domain...' });
            } 

            const result = await ClientUser.update( { name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip }, {
                where: {
                  id
                },
                returning: true,
            });

            await GroupMember.destroy({
                where: { user_id : id },
               // truncate: true
            });
            
            await UserApp.destroy({
                where: { user_id : id },
               // truncate: true
            });  
        } else {

            let sameclinet = await ClientUser.findOne({ where: { name, domain_id }}); 
            if(sameclinet){
                return res.send({ error: 'Client Name is already in use on the same domain...' });
            } 

            user = new ClientUser({
                name, email, status, domain_id, password, wg_key, virtual_ip, public_ip, local_ip
            })

            try {
                const savedUser = await user.save();
                id = savedUser.dataValues.id;    
            } catch (error) {
                return res.send(error)
            }
            
        }
        
        // Group adding for created user
        if (Array.isArray(group_ids)) {
            for (var group_id of group_ids) {
                let group_member = new GroupMember({
                    user_id : id , group_id : group_id
                })
                
                try {
                    await group_member.save();
                } catch (error) {
                    // skip
                }
            }  
        }    

        // App access adding for created user
        if (Array.isArray(app_ids)) {    
            for (var app_id of app_ids) {
                let userapp = new UserApp({
                    user_id : id , app_id : app_id, status: 'A'
                })
                
                try {
                    await userapp.save();
                } catch (error) {
                    // skip
                }
            }
        }
                  
        const group_list = await Group.findAll({ 
            where: where_domain_cond,
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });

        const groups = await GroupMember.findAll({ 
            where: { user_id : id }
        });
         
        const app_list = await App.findAll({ 
            where: { },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
            include: [{
                model: Service,
                required: true,
                where: where_domain_cond
            }]
        }); 
        
        const apps = await UserApp.findAll({ 
            where: { user_id : id }
        });
         
        ClientUser.findOne({
             where: { id },
             include: [{
                model: Domain,
            }]
            }).then(user => {
            if (user) {
                // User exist
                user.dataValues.password = "";
                user.dataValues.domain_list = domain_list;
                user.dataValues.group_list = group_list;
                user.dataValues.group_ids = groups.map( item => item.group_id );
                user.dataValues.app_list = app_list;
                user.dataValues.app_ids = apps.map( item => item.app_id );

                if(!isUpdated && isEmailNotification && false) {

                    //Json download
                    let templateJson = fs.readFileSync('public/templates/sample.json');
                    let tempData = JSON.parse(templateJson);
                    tempData["client"]["name"] = user.name;
                    tempData["client"]["domain"] = user.domain.name;
                    tempData["client"]["password"] =  user.password;  
                    tempData["client"]["role"] = "U";   // “U” for Clients, and “S” for Gateways

                    var json = JSON.stringify(tempData);
                    var filename = user.name + '.json';
                    const userEmail = req.user.email?req.user.email:(req.user.name + '@' + req.user.domain.name);

                    sendEmail(
                        req.user.domain_id,
                        {
                            app_link:`wgp://eclipz.io/${Buffer.from(json).toString('base64')}`,
                            host: 'https:\/\/' + req.headers.host,
                        }, 
                        'create',
                        userEmail,
                        'New Client Created',
                        [
                            {   // utf-8 string as an attachment
                                filename: filename,
                                content: json
                            }
                        ],
                        function(err){}
                    );
                }

                return res.send( user.dataValues );
            } else {
                return res.send({ error: 'User doesn\'t exist...' });
            }
        })
    });
}

const renameUser = async (req, res, next) => {
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
    let where_user_cond = {}
    if (id > 0)
        where_user_cond = { id: id }
    else
        where_user_cond = { name: name, domain_id: domain_id }
    
    ClientUser.findOne({ 
        where: where_user_cond
    }).then(async user => {
        if (user) {
            // User exist
            if (id == 0) id = user.id;
            const result = await ClientUser.update( { name: new_name }, {
                where: {
                  id
                },
                returning: true,
                plain: true
            });            
            return res.send( result[1].dataValues );
        } else {
            return res.send({ error: 'User doesn\'t exist...' });            
        }
    });    
}

const accessUser = async (req, res, next) => {
    let { id, name, app_name, action, domain_id } = req.body;
    if (!app_name) {
        return res.send({ error: 'App name (app_name) must be provided' });
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
    let where_user_cond = {}
    if (id > 0)
        where_user_cond = { id: id }
    else
        where_user_cond = { name: name, domain_id: domain_id }

    ClientUser.findOne({ 
        where: where_user_cond
    }).then(async user => {
        if (user) {
            // User exists
            if (id == 0) id = user.id;

            const app = await App.findOne({
                where: {name: app_name},
            })            

            if (action == 'add') {
                let userapp = new UserApp({
                    user_id : id , app_id : app.id, status: 'A'
                })

                try {
                    await userapp.save();                    
                } catch (error) {
                    
                }
                
                return res.send({ message: 'Added to access list ...' })
            }
            else if (action == 'remove') {
                UserApp.destroy({
                    where: {user_id: id, app_id: app.id}
                })
                return res.send({ message: 'Removed from access list ...' })
            }
        } else {
            return res.send({ error: 'Group doesn\'t exist...' });            
        }
    });    
}

const groupUser = async (req, res, next) => {
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
    let where_user_cond = {}
    if (id > 0)
        where_user_cond = { id: id }
    else
        where_user_cond = { name: name, domain_id: domain_id }

    ClientUser.findOne({ 
        where: where_user_cond
    }).then(async user => {
        if (user) {
            // User exists
            if (id == 0) id = user.id;

            const group = await Group.findOne({
                where: {name: group_name},
            })
            
            if (!group)
                return res.send({ error: 'Group doesn\'t exist...' });    

            if (action == 'add') {
                let member = new GroupMember({
                    user_id : id , group_id : group.id, status: 'A'
                })

                try {
                    await member.save();                    
                } catch (error) {
                    
                }
                
                return res.send({ message: 'Added to group ...' })
            }
            else if (action == 'remove') {
                GroupMember.destroy({
                    where: {user_id: id, group_id: group.id}
                })
                return res.send({ message: 'Removed from group ...' })
            }
        } else {
            return res.send({ error: 'User doesn\'t exist...' });            
        }
    });    
}

const getGroups =  async (req, res, next) => {
    
    sequelize.query('SELECT user_groups.*, count(group_member.id) as membercount FROM user_groups LEFT JOIN group_member ON group_member.group_id = user_groups.id group by user_groups.id,user_groups.name;',
        { type: Sequelize.QueryTypes.SELECT }
    ).then(function(rows){
        res.send({
            groups: rows
        });
    });

}

const deleteUsers =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await ClientUser.findOne({ where: { id: id }}).then( async user => {
            if(user){
                // User exist

                await UserApp.update( {  status : 'D' }, {
                    where: {
                      user_id : user.id
                    },
                    returning: true,
                });

                await ClientUser.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+user.name, }, {
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

const deleteUser =  async (req, res, next) => {
    await ClientUser.findOne({ 
        where: { name: req.params.name, domain_id: req.user.domain_id }
    }).then( async user => {
        if (user) {
            // User exist
            await UserApp.update( {  status : 'D' }, {
                where: {
                  user_id : user.id
                },
                returning: true,
              });
            await ClientUser.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+user.name, }, {
                where: {
                    id:user.id
                },
                returning: true,
            });
        } else {

        }
    })

    return res.send({ message: 'Deleted...' });
}

const downloadTemplate = async (req, res, next) => { 
    id = 0;
    if (req.body.userId)
        id = req.body.userId;
        
    ClientUser.findOne({
        where: { id: id },
        include: [{
           model: Domain,
       }]
    }).then(async user => {
        if (user) {
            //Json download
            try {

                let templateJson = fs.readFileSync('public/templates/sample.json');
                let tempData = JSON.parse(templateJson);
                tempData["client"]["name"] = user.name;
                tempData["client"]["domain"] = user.domain.name;
                tempData["client"]["password"] = user.password; //user.password;
                tempData["client"]["role"] = "U";   // “U” for Clients, and “S” for Gateways
    
                var json = JSON.stringify(tempData);
                var filename = user.name + '.json';
                var mimetype = 'application/json';
                res.setHeader('Content-Type', mimetype);
                res.setHeader('Content-disposition','attachment; filename='+filename);
                res.send(json);    
            } catch (error) {
                return res.send({ error: 'Sample JSON file doesn\'t exist...' });                
            }
            
       } else {
           return res.send({ error: 'Client doesn\'t exist...' });
       }
   })
}

const emailTemplate = async (req, res, next) => { 
    id = 0;
    if (req.body.userId)
        id = req.body.userId;
        
    ClientUser.findOne({
        where: { id: id },
        include: [{
           model: Domain,
       }]
    }).then(async user => {
        if (user) {
            //Json download
            try {
                let templateJson = fs.readFileSync('public/templates/sample.json');
                let tempData = JSON.parse(templateJson);
                tempData["client"]["name"] = user.name;
                tempData["client"]["domain"] = user.domain.name;
                tempData["client"]["password"] =  user.password;  
                tempData["client"]["role"] = "U";   // “U” for Clients, and “S” for Gateways

                var json = JSON.stringify(tempData);
                var filename = user.name + '.json';
                const userEmail = req.user.email?req.user.email:(req.user.name + '@' + req.user.domain.name);
                const clientEmail = user.email?user.email:(user.name+'@'+user.domain.name);
                
                let qrcode= await QRCode.toDataURL(json, { margin : 7, width : 700 });  

                sendEmail(
                    req.user.domain_id,
                    {
                        app_link:Buffer.from(json).toString('base64'),
                        host: 'https:\/\/' + req.headers.host,
                        qr_img_url: qrcode,
                    }, 
                    'create',
                    clientEmail,
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
            
       } else {
           return res.send({ message: 'Client doesn\'t exist...' });
       }
   })
}

module.exports = { getAllUsers, getUser, saveUser, renameUser, groupUser, accessUser, deleteUsers, deleteUser, downloadTemplate, emailTemplate };
