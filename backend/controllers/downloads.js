const Sequelize = require('sequelize')
const Download = require('../models/download');
const multer = require('multer');

const getAllDownloads =  async (req, res, next) => {
    Download.findAll({ 
        where: {
            'status':'A'
         },
        order: [
            ['id', 'DESC'],
            ['filename', 'ASC'],
        ]
     }).then((downloadLists) => {
        res.send({
            downloads: downloadLists
        });
    });
}

const getDownload =  async (req, res, next) => {
    var file = __dirname + '/../public/downloads/' + req.params.filename;
    res.download(file); 
}


const saveDownload = async (req, res, next) => {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/downloads')
        },
        filename: function (req, file, cb) { 
            cb(null, file.originalname );
            //cb(null, Date.now() + '-' +file.originalname )
            //const ext = file.mimetype.split("/")[1];
            //cb(null, req.body.domain_id + ".png" )
            //cb(null, req.body.domain_id + "-" + Date.now() + '.' + ext )
        }
    })

    var fileFilter = (req, file, cb) => { 
        // if ( file.mimetype === 'image/jpeg' || file.mimetype == "image/png" ) {
        //     cb(null , true);
        // } else {
        //     cb(null, false);
        // }
    }

    var upload = multer({ storage: storage, limits: { 
        fileSize : 1024*1024*1024 *5,  // 5 GB
        //fieldNameSize: 255,
        //files: 1,
        //fields: 1 
    }  }).single('file');  // 

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        let { filename, status, description} = req.body;
        if(!status){
            status="A";
        }
        let download = new Download({
            filename, status, description
        });
        download.save().then(function (row) {
            res.send( row.dataValues );
        })
    })

}
const deleteDownloads =  async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await Download.findOne({ where: { id: id }}).then( async row => {
            if(row){
                // service exist
                row.status = 'D';
                await row.save();
            }else{

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}

module.exports = { getAllDownloads, getDownload, saveDownload, deleteDownloads };