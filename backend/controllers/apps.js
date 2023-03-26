const Sequelize = require('sequelize');
const Bcrypt = require("bcryptjs");
const App = require('../models/app');
const sequelize = require('../database/database');
const Service = require('../models/service');
const UserApp = require('../models/userapp');
const GroupApp = require('../models/groupapp');


const getAllApps = async (req,res,next) => {
    let service_id = req.query.service_id;
    let where_cond = {};
    if(service_id) {
        where_cond = {service_id};
    }
    let where_domain_cond = {};
    if( !req.user.dataValues.issuperadmin ) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'};
        where_cond["status"] = "A";
    }
    where_cond["status"] = "A";
    App.findAll({ 
        //where: where_cond,
        where: { ...where_cond, status: {[Sequelize.Op.not]:'D'}},
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ],
        include: [{
            model: Service,
            required: true,
            where: where_domain_cond
        }]
     }).then( async (appLists) => {
        res.send({
            apps: appLists
        });
    });
}

const getApp = async (req,res,next) => {
    let where_domain_cond = { status: {[Sequelize.Op.not]:'D'}};
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'};
    }

    // If name is provided, name will be used instead of id
    let where_app_cond = {}
    if (req.query.appId)
        where_app_cond = { id: req.query.appId }
    else if (req.query.appName)
        where_app_cond = { name: req.query.appName }

    App.findOne({
         //where: where_app_cond,
         where: { ...where_app_cond, status: {[Sequelize.Op.not]:'D'}},
         include: [{
            model: Service,
         }]
        }).then(async app => {
        if (app) {
            // App exists
            const service_list = await Service.findAll({ 
                where: where_domain_cond,
                order: [
                    ['id', 'DESC'],
                    ['name', 'ASC'],
                ]
             });
            app.dataValues.service_list = service_list;
            return res.send( app.dataValues );
        }else{
            return res.send({ error: 'Application dosnt exist...' });
        }
    })
}

const saveApp = async (req, res, next) => {
    let where_domain_cond = {};
    if( !req.user.dataValues.issuperadmin ) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status':'A'};
    }

    let { id, name, status, service_id, allowed_ips } = req.body;
    if (!name) {
        return res.send({ error: 'Application name must be provided' });
      }
      
    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    App.findOne({ 
        where: {
            id: id
    }}).then(async app => {
        if (app) {
            
            let sameItem = await App.findOne({ where: { name, service_id, id: { [Sequelize.Op.not]: id } } });
            if (sameItem) {
                return res.send({ error: 'Application Name is already in use on the same service...' });
            }

            const result = await App.update( { name, status, service_id, allowed_ips }, {
                where: {
                  id
                },
                returning: true,
              });
        } else {

            let sameItem = await App.findOne({ where: { name, service_id } });
            if (sameItem) {
                return res.send({ error: 'Application Name is already in use on the same service...' });
            }

            app = new App({
                name, status, service_id, allowed_ips
            })
            
            const savedApp = await app.save();
            id = savedApp.dataValues.id;
        }
        
        const service_list = await Service.findAll({ 
            where: where_domain_cond,
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
         });
        
         App.findOne({
             where: { id },
             include: [{
                model: Service,
            }]
            }).then(app => {
                if(app){
                    // service exist
                    app.dataValues.service_list = service_list;
                    return res.send( app.dataValues );
                }else{
                    return res.send({ error: 'Application dosnt exist...' });
                }
            })
    });
}

const deleteApps =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await App.findOne({ where: { id: id }}).then( async app => {
            if(app){
                // service exist

                await UserApp.update( {  status : 'D' }, {
                    where: {
                      app_id : app.id
                    },
                    returning: true,
                  });
                await GroupApp.update( {  status : 'D' }, {
                    where: {
                        app_id : app.id
                    },
                    returning: true,
                  });  

                const result = await App.update({ status:'D', name:'__DELETED__'+Date.now()+'__'+app.name, }, {
                    where: {
                        id,
                    },
                    returning: true,
                });
            }else{

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}

module.exports = { getAllApps, getApp, saveApp, deleteApps };
