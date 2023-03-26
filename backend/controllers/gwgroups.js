const Sequelize = require('sequelize')
const GwGroup = require('../models/gw_group');
const sequelize = require('../database/database')
const Domain = require('../models/domain');

const getGroups =  async (req, res, next) => {
    let status = req.query.status;
    let where_domain_cond = " where gw_groups.status <> 'D' ";
    if( status == 'active'){
        where_domain_cond = " where gw_groups.status = 'A' ";
    }
    if( !req.user.dataValues.issuperadmin ) {
        where_domain_cond = where_domain_cond + "and domain_id="+ req.user.domain_id+" and domains.status='A'" ;
    }
    sequelize.query(`
        SELECT gw_groups.*,domains.name as domain_name, count(gw_group_members.id) as membercount 
        FROM gw_groups LEFT JOIN gw_group_members ON gw_group_members.gw_group_id = gw_groups.id 
        LEFT JOIN domains ON domains.id = gw_groups.domain_id ${where_domain_cond} 
        group by gw_groups.id,gw_groups.name,domains.name;`,
        { type: Sequelize.QueryTypes.SELECT }
    ).then(function(rows){
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

    let {id, name, status, domain_id} = req.body
    if (!name) {
        return res.send({ error: 'Group Name must be provided' });
    }
    
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }
    
    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }

    GwGroup.findOne({ 
        where: {
            id: id
    }}).then(async group => {
        if (group) {

            let samegroup = await GwGroup.findOne({ where: { name, domain_id, id: { [Sequelize.Op.not]: id } } });
            if (samegroup) {
                return res.send({ error: 'This Name is already in use on the same domain...' });
            }

            const result = await GwGroup.update( { status, name, domain_id }, {
                where: {
                  id,
                },
                returning: true,
              });
        } else {

            let samegroup = await GwGroup.findOne({ where: { name, domain_id } });
            if (samegroup) {
                return res.send({ error: 'This Name is already in use on the same domain...' });
            }

            group = new GwGroup({
                name, status, domain_id
            });

            try {
                const savedGroup = await group.save();
                id = savedGroup.dataValues.id;                
            } catch (error) {
                return res.send(error)
            }
        }

        GwGroup.findOne({
            where: { id }
           }).then(group => {
           if (group) {
               // Group exist
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
            const result = await GwGroup.update( { name: new_name }, {
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

const getGroup =  async (req, res, next) => {
    let where_domain_cond = {};
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status': 'A'} ;
    }

    // If name is provided, name + domainId will be used instead of id
    let where_group_cond = {}
    if (req.query.gwgroupId)
        where_group_cond = { id: req.query.gwgroupId }
    else if (req.query.groupName)
        where_group_cond = { name: req.query.groupName, domain_id: req.user.domain_id }

    GwGroup.findOne({ where: where_group_cond}).then(async group => {
        if (group) {
            // Group exist
            const domain_list = await Domain.findAll({ 
                where: { status: {[Sequelize.Op.not]:'D'}},
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
             });
            group.dataValues.domain_list = domain_list;
            return res.send( group.dataValues );
        } else {
            return res.send({ error: 'Group dosn\'t exist...' });
        }
    })
}

const deleteGroups =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await GwGroup.findOne({ where: { id: id }}).then( async group => {
            if (group) {
                await GwGroup.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+group.name, }, {
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
    await GwGroup.findOne({ 
        where: { name: req.params.name, domain_id: req.user.domain_id }
    }).then( async group => {
        if (group) {
            // User exist
            await GwGroup.update({ status: 'D', name:'__DELETED__'+Date.now()+'__'+group.name, }, {
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

module.exports = { getGroups, getGroup, saveGroup, renameGroup, deleteGroups, deleteGroup };
