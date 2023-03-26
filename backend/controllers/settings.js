const Sequelize = require('sequelize')
const Domain = require('../models/domain');
const Settings = require('../models/settings');
const multer = require('multer');
var nconf = require('nconf');
const fs = require('fs');
const getSettings =  async (req, res, next) => {
    let domain_id = req.query.domain_id;
    if( !domain_id ) {
        domain_id = req.user.dataValues.domain_id;
    }
    let isSuperAdmin = req.user.dataValues.issuperadmin;

    try {
        //nconf.argv().env()
        nconf.file('file', { file: `./config/config_${domain_id}.json` });
        res.status(200).send( nconf.get() );
        
    } catch (e) {
        Settings.findAll({ 
            where: {
                domain_id
            },
            include: [{
                model: Domain,
            }]
         }).then( async (settingLists) => {       
            let settingsObj = {}; 
            for(let i=0; i<settingLists.length; i++){
                settingsObj[settingLists[i].key] = settingLists[i].value;
            }
            res.status(200).send(settingsObj);
        });
	} 
    
}
const saveSettings = async (req, res, next) => {

    let { domain_id } = req.body
    if( !domain_id ) {
        res.status(400).send({error: "Domain not selected"});
    }
    try {
        //nconf.argv()//.env()
        nconf.file('file', { file: `./config/config_${domain_id}.json` });
        for (const key in req.body) {
            //console.log(`${key}: ${user[key]}`);
            nconf.set( key, req.body[key]);
        }      
        nconf.save(function (err) {
            if (err) {
                console.error(err.message);
                res.status(400).send( {error : err.message} );
            }
            fs.readFile(`./config/config_${domain_id}.json`, function (err, data) {
                //console.log(JSON.parse(data.toString()))
            });
            res.status(200).send( nconf.get() );
        });
    } catch (e) {

        for (const key in req.body) {
            let setting = await Settings.findOne({ where: { domain_id, key }}); 
            if(setting){
                let result = await Settings.update( { value: req.body[key] }, 
                    {
                        where: {
                            domain_id,
                            key
                        },
                        returning: true,
                    });
            } else {
                setting = new Settings({
                    domain_id, key, value: req.body[key]
                })
                const savedSetting = await setting.save();
            }
        }

        Settings.findAll({ 
            where: {
                domain_id
            },
            include: [{
                model: Domain,
            }]
         }).then( async (settingLists) => {       
            let settingsObj = {}; 
            for(let i=0; i<settingLists.length; i++){
                settingsObj[settingLists[i].key] = settingLists[i].value;
            }
            res.send(settingsObj);
        });
	} 
}

module.exports = { getSettings, saveSettings };