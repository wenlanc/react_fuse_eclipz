const Sequelize = require('sequelize')
const Domain = require('../models/domain');
const ClientUser = require('../models/clientuser');
const UserApp = require('../models/userapp');
const GroupApp = require('../models/groupapp');
const Service = require('../models/service');
const App = require('../models/app');
const User = require('../models/user');
const Group = require('../models/group');
const GwGroup = require('../models/gw_group');

const multer = require('multer');

const getDomains = async (req, res, next) => {
    let status = req.query?req.query.status:"";
    let where_domain_cond = { status: { [Sequelize.Op.not]: 'D' }};
    if( status == 'active'){
        where_domain_cond = { 'status': 'A' };
    }
    Domain.findAll({
        where: where_domain_cond,
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ]
    }).then((domainLists) => {
        res.send({
            domains: domainLists
        });
    });
}

const saveDomain = async (req, res, next) => {
    let { id, name, status } = req.body
    if (!status) {
        status = "A";
    }

    if (!name) {
        return res.send({ error: 'Domain Name must be provided' });
    }

    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    Domain.findOne({
        where: { id: id }
    }).then(async domain => {
        if (domain) {
            // Domain exists     
                    
            let samedomain = await Domain.findOne({ where: { name, id: { [Sequelize.Op.not]: id } } });
            if (samedomain) {
                return res.send({ error: 'Domain Name is already in use...' });
            }
            
            const result = await Domain.update({ status, name }, {
                where: { id, },
                returning: true,
            });
            res.send(result[1][0]);
        } else {
                    
            let samedomain = await Domain.findOne({ where: { name } });
            if (samedomain) {
                return res.send({ error: 'Domain Name is already in use...' });
            }

            domain = new Domain({
                name: name, status: status
            })

            domain.save().then(function (domain) {
                res.send(domain.dataValues);
            })
                .catch(function (error) {
                    res.send(error);
                })
        }
    });
}

const getDomain = async (req, res, next) => {
    // If name is provided, name will be used instead of id
    let where_domain_cond = {}
    if (req.query.domainId)
        where_domain_cond = { id: req.query.domainId }
    else if (req.query.domainName)
        where_domain_cond = { name: req.query.domainName }

    Domain.findOne({ where: where_domain_cond }).then(domain => {
        if (domain) {
            // Domain exists
            return res.send(domain.dataValues);
        } else {
            return res.send({ error: 'Domain dosnt exist...' });
        }
    })
}

const getDomain2 = async (req, res, next) => {
    Domain.findOne({ where: { name: req.params.name } }).then(domain => {
        if (domain) {
            // User exist
            return res.send(domain.dataValues);
        } else {
            return res.send({ error: 'Domain dosnt exist...' });
        }
    })
}

const deleteDomains = async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await Domain.findOne({ where: { id: id } }).then(async domain => {
            if (domain) {
                // User exist

                let result = await ClientUser.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                    where: {
                        domain_id: domain.id
                    },
                    returning: true,
                    //plain: true
                });

                if (result[1].length > 0) {
                    for (var i = 0; i < result[1].length; i++) {
                        await UserApp.update({ status: 'D' }, {
                            where: {
                                user_id: result[1][i].dataValues.id
                            },
                            returning: true,
                        });
                    }
                }

                await Group.findAll({ where: { domain_id: domain.id } }).then(async groups => {
                    if (groups && groups.length) {
                        // User exist
                        for (var i = 0; i < groups.length; i++) {
                            await GroupApp.update({ status: 'D' }, {
                                where: {
                                    group_id: groups[i].id
                                },
                                returning: true,
                            });
                            await Group.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                                where: {
                                    id: groups[i].id
                                },
                                returning: true,
                            });
                        }
                    } else {

                    }
                })

                await Service.findAll({ where: { domain_id: domain.id } }).then(async services => {
                    if (services && services.length) {
                        // service exist
                        for (var i = 0; i < services.length; i++) {
                            await App.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                                where: {
                                    service_id: services[i].id
                                },
                                returning: true,
                            });
                            await Service.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                                where: {
                                    id: services[i].id
                                },
                                returning: true,
                            });
                        }
                    } else {

                    }
                })

                await User.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                    where: {
                        domain_id: domain.id
                    },
                    returning: true,
                });

                await GwGroup.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                    where: {
                        domain_id: domain.id
                    },
                    returning: true,
                });

                await Domain.update({ status: 'D', name: '__DELETED__' + Date.now() + '__' + domain.name, }, {
                    where: {
                        id: domain.id
                    },
                    returning: true,
                });

            } else {

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}


const uploadImageDomains = async (req, res, next) => {

    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/imgs/domains')
        },
        filename: function (req, file, cb) {
            //cb(null, Date.now() + '-' +file.originalname )
            const ext = file.mimetype.split("/")[1];
            cb(null, req.body.image_type + req.body.domain_id + ".png")
            //cb(null, req.body.domain_id + "-" + Date.now() + '.' + ext )
        }
    })

    var fileFilter = (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype == "image/png") {
            cb(null, true);
        } else {
            cb(null, false);
        }
    }

    var upload = multer({ storage: storage, limits: { fileSize: 1024 * 1024 * 5 }, fileFilter: fileFilter }).single('file');  // 

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }

        Domain.findOne({ where: { id: req.body.domain_id } }).then(async domain => {
            if (domain) {
                // Domain exist
                if (req.body.image_type == 'logo')
                    domain.image = req.file.filename;
                else
                    domain.icon = req.file.filename;
                await domain.save();

                return res.status(200).send(req.file)
            } else {
                return res.send({ error: 'Domain dosnt exist...' });
            }
        })
    })
}

const deleteDomain = async (req, res, next) => {
    var nope = false;
    await Domain.findOne({ where: { name: req.params.name } }).then(async domain => {
        if (domain) {
            // User exist

            let result = await ClientUser.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                where: {
                    domain_id: domain.id
                },
                returning: true,
                //plain: true
            });

            if (result[1].length > 0) {
                for (var i = 0; i < result[1].length; i++) {
                    await UserApp.update({ status: 'D' }, {
                        where: {
                            user_id: result[1][i].dataValues.id
                        },
                        returning: true,
                    });
                }
            }

            await Group.findAll({ where: { domain_id: domain.id } }).then(async groups => {
                if (groups && groups.length) {
                    // User exist
                    for (var i = 0; i < groups.length; i++) {
                        await GroupApp.update({ status: 'D' }, {
                            where: {
                                group_id: groups[i].id
                            },
                            returning: true,
                        });
                        await Group.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                            where: {
                                id: groups[i].id
                            },
                            returning: true,
                        });
                    }
                } else {

                }
            })

            await Service.findAll({ where: { domain_id: domain.id } }).then(async services => {
                if (services && services.length) {
                    // service exist
                    for (var i = 0; i < services.length; i++) {
                        await App.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                            where: {
                                service_id: services[i].id
                            },
                            returning: true,
                        });
                        await Service.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                            where: {
                                id: services[i].id
                            },
                            returning: true,
                        });
                    }
                } else {

                }
            })

            await User.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                where: {
                    domain_id: domain.id
                },
                returning: true,
            });

            await GwGroup.update({ status: 'D', name: Sequelize.fn('concat', '__DELETED__' + Date.now() + '__', Sequelize.col('name')) }, {
                where: {
                    domain_id: domain.id
                },
                returning: true,
            });

            await Domain.update({ status: 'D', name: '__DELETED__' + Date.now() + '__' + domain.name, }, {
                where: {
                    id: domain.id
                },
                returning: true,
            });
        }
        else {
            nope = true;
        }
    })

    if (nope)
        return res.send({ message: 'No such domain...' });

    return res.send({ message: 'Deleted...' });
}

module.exports = { getDomains, getDomain, saveDomain, deleteDomains, uploadImageDomains, getDomain2, deleteDomain };
