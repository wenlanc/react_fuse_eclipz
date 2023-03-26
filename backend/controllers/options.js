const Sequelize = require('sequelize')
const Option = require('../models/option');
const multer = require('multer');

const getOptions =  async (req, res, next) => {

    //let isSuperAdmin = req.user.dataValues.issuperadmin;

    Option.findAll({ 
        where: {
            'status':'A'
         },
        order: [
            ['id', 'DESC'],
        ]
     }).then((options) => {
        let optionData = {};
        for( var i = 0 ; i < options.length ; i++) {
            optionData[options[i].key] = options[i].value;
        }
        res.send({
            optionData
        });
    }); 
    
}


const saveOptions = async (req, res, next) => {

    let option = null;
    for (const key in req.body) {
        option = await Option.findOne({ 
            where: {
                key: key
        }});
        if(option){
            // service exist
            const result = await Option.update( { value: req.body[key] }, {
                where: {
                    key: key
                },
                returning: true,
                });
        }else{
            option = new Option({
                key: key, value:req.body[key]
            })
            const savedOption = await option.save();
            id = savedOption.dataValues.id;
        }

    }
    
    Option.findAll({ 
        where: {
            'status':'A'
         },
        order: [
            ['id', 'DESC'],
        ]
     }).then((options) => {
        let optionData = {};
        for( var i = 0 ; i < options.length ; i++) {
            optionData[options[i].key] = options[i].value;
        }
        res.send({
            optionData
        });
    }); 

}


const uploadOptionImage =  async (req, res, next) => {
    
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/imgs/options')
        },
        filename: function (req, file, cb) { 
            //cb(null, Date.now() + '-' +file.originalname )
            const ext = file.mimetype.split("/")[1];
            cb(null, req.body.key_name + '.' + ext )
        }
    })

    var fileFilter = (req, file, cb) => { 
        if ( file.mimetype === 'image/jpeg' || file.mimetype == "image/png" ) {
            cb(null , true);
        } else {
            cb(null, false);
        }
    }

    var upload = multer({ storage: storage, fileFilter:fileFilter }).single('file');  // 

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        Option.findOne({ where: { key: req.body.key_name }}).then(async option => {
            if(option){
                // Domain exist
                option.value = req.file.filename;
                await option.save();
            }else{
                option = new Option({
                    key: req.body.key_name, value:req.file.filename
                })
                const savedOption = await option.save();
                id = savedOption.dataValues.id;

            }
            
            return res.send({ message: 'Successfully uploaded.' });
        })       
    })
}


module.exports = { getOptions, saveOptions, uploadOptionImage };