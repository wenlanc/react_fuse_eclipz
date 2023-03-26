const Sequelize = require('sequelize')
const Group = require('../models/group');
const sequelize = require('../database/database')
const GroupApp = require('../models/groupapp');
const Service = require('../models/service');
const App = require('../models/app');
const Domain = require('../models/domain');

const getGroups =  async (req, res, next) => {
    let where_domain_cond = " where user_groups.status <> 'D' ";
    if( !req.user.dataValues.issuperadmin ) {
        where_domain_cond = " where user_groups.status <> 'D' and domain_id="+ req.user.domain_id+" and domains.status='A'" ;
    }
    sequelize.query('SELECT user_groups.*,domains.name as domain_name, count(group_members.id) as membercount FROM user_groups LEFT JOIN group_members ON group_members.group_id = user_groups.id LEFT JOIN domains ON domains.id = user_groups.domain_id '+where_domain_cond+' group by user_groups.id,user_groups.name,domains.name;',
        { type: Sequelize.QueryTypes.SELECT }
    ).then(function(rows){
        console.log(rows);
        res.send({
            groups: rows
        });
    });
}

const saveGroup = async (req, res, next) => {
    let domain_list = [];
    if (req.user.dataValues.issuperadmin) {
        domain_list = await Domain.findAll({ 
            where: { },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });
    }

    let where_domain_cond = {};
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'} ;
    }

    let {id, name, status, domain_id, app_ids} = req.body
    if (!name) {
        return res.send({ error: 'Group Name must be provided' });
    }
    
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }
    
    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }

    Group.findOne({ 
        where: {
            id: id
    }}).then(async group => {
        if (group) {
            // User exist

            let samegroup = await Group.findOne({ where: { name, domain_id, id: { [Sequelize.Op.not]: id } } });
            if (samegroup) {
                return res.send({ error: 'Group Name is already in use on the same domain...' });
            }

            const result = await Group.update( { status, name, domain_id }, {
                where: {
                  id,
                },
                returning: true,
              });

            await GroupApp.destroy({
                where: { group_id : id},
                // truncate: true
            });  
            //res.send( result[1][0] );
        } else {

            let samegroup = await Group.findOne({ where: { name, domain_id } });
            if (samegroup) {
                return res.send({ error: 'Group Name is already in use on the same domain...' });
            }

            group = new Group({
                name, status, domain_id
            });

            try {
                const savedGroup = await group.save();
                id = savedGroup.dataValues.id;                
            } catch (error) {
                return res.send(error)
            }
        }

        // App access adding for created user
        if (Array.isArray(app_ids)) {
            for (var app_id of app_ids) {
                let groupapp = new GroupApp({
                    group_id : id , app_id : app_id, status: 'A'
                })

                try {
                    await groupapp.save();                    
                } catch (error) {
                    
                }
            }
        } 

        const app_list = await App.findAll({ 
            where: { },
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ],
            include: [{
                model: Service,
                required: true,
                where:where_domain_cond
            }]
         }); 

         const apps = await GroupApp.findAll({ 
            where: { group_id : id }
         });

         Group.findOne({
            where: { id }
           }).then(group => {
           if (group) {
               // Group exist
               group.dataValues.app_list = app_list;
               group.dataValues.app_ids = apps.map( item => item.app_id );
               group.dataValues.domain_list = domain_list;
               return res.send( group.dataValues );
           } else {
               return res.send({ error: 'Group doesn\'t exist...' });
           }
        })
    });
}

const renameGroup = async (req, res, next) => {
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
    let where_group_cond = {}
    if (id > 0)
        where_group_cond = { id: id }
    else
        where_group_cond = { name: name, domain_id: domain_id }

    Group.findOne({ 
        where: where_group_cond
    }).then(async group => {
        if (group) {
            // Group exist
            if (id == 0) id = group.id;
            const result = await Group.update( { name: new_name }, {
                where: {
                  id
                },
                returning: true,
                plain: true
            });            
            return res.send( result[1].dataValues );
        } else {
            return res.send({ error: 'Group doesn\'t exist...' });            
        }
    });    
}

const accessGroup = async (req, res, next) => {
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
    let where_group_cond = {}
    if (id > 0)
        where_group_cond = { id: id }
    else
        where_group_cond = { name: name, domain_id: domain_id }

    Group.findOne({ 
        where: where_group_cond
    }).then(async group => {
        if (group) {
            // Group exist
            if (id == 0) id = group.id;

            const app = await App.findOne({
                where: {name: app_name},
            })            

            if (action == 'add') {
                let groupapp = new GroupApp({
                    group_id : id , app_id : app.id, status: 'A'
                })

                try {
                    await groupapp.save();                    
                } catch (error) {
                    
                }
                console.log('this', id, app.id)
                return res.send({ message: 'Added to access list ...' })
            }
            else if (action == 'remove') {
                GroupApp.destroy({
                    where: {group_id: id, app_id: app.id}
                })
               
                return res.send({ message: 'Removed from access list ...' })
            }
        } else {
            return res.send({ error: 'Group doesn\'t exist...' });            
        }
    });    
}

const getGroup =  async (req, res, next) => {
    let where_domain_cond = { status: {[Sequelize.Op.not]:'D'}};
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status': 'A'} ;
    }

    // If name is provided, name + domainId will be used instead of id
    let where_group_cond = {}
    if (req.query.groupId)
        where_group_cond = { id: req.query.groupId }
    else if (req.query.groupName)
        where_group_cond = { name: req.query.groupName, domain_id: req.user.domain_id }

    Group.findOne({ where: where_group_cond}).then(async group => {
        if (group) {
            // Group exist
            const app_list = await App.findAll({ 
                where: { status: {[Sequelize.Op.not]:'D'} },
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
             const apps = await GroupApp.findAll({ 
                where: { group_id : group.id, status: {[Sequelize.Op.not]:'D'} }
             });

             const domain_list = await Domain.findAll({ 
                where: { status: {[Sequelize.Op.not]:'D'}},
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
             });

             group.dataValues.app_list = app_list;
             group.dataValues.domain_list = domain_list;
             group.dataValues.app_ids = apps.map( item => item.app_id );
            return res.send( group.dataValues );
        } else {
            return res.send({ error: 'Group dosn\'t exist...' });
        }
    })
}

const deleteGroups =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await Group.findOne({ where: { id: id }}).then( async group => {
            if (group) {
                // User exist

                await GroupApp.update( {  status : 'D' }, {
                    where: {
                      group_id : group.id
                    },
                    returning: true,
                  });
                await Group.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+group.name, }, {
                    where: {
                        id: group.id
                    },
                    returning: true,
                });
            } else {

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}

const deleteGroup =  async (req, res, next) => {
    await Group.findOne({ 
        where: { name: req.params.name, domain_id: req.user.domain_id }
    }).then( async group => {
        if (group) {
            // User exist
            await Group.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+group.name, }, {
                where: {
                    id: group.id
                },
                returning: true,
            });
        } else {

        }
    })

    return res.send({ message: 'Deleted...' });
}

module.exports = { getGroups, getGroup, saveGroup, renameGroup, accessGroup, deleteGroups, deleteGroup };
