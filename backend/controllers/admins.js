//const Token = require("../models/Token")
const Bcrypt = require("bcryptjs")
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const passport = require("passport");
const localStrategy = require('passport-local').Strategy
const Sequelize = require('sequelize')
const config = require('../config');
// const jwt = require('jwt-simple');
const User = require('../models/user');
const Domain = require('../models/domain');
const jwt = require('jsonwebtoken');
const Session = require('../models/session');
const Option = require('../models/option');
const fs = require('fs');
const { authenticator } = require('otplib');
const QRCode = require('qrcode');

require("dotenv").config();
const nconf = require('nconf');
const { sendEmail } = require('../_helpers/utils');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.sign({ sub: user.id }, config.secret, { expiresIn: '24h' });
    // return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

//    Usage : return users.map(u => omitPassword(u));
function omitPassword(user) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
}

const loginUser = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err

        if (!user) res.send({ error: 'User doesn\'t exist' })
        else {
            req.login(user, async function (err) {
                if (err) {
                    return next(err);
                } else {
                    //return res.redirect('/user/' + req.user.username);

                    delete req.user.password;
                    let token = jwt.sign({ sub: user.id }, config.secret_2fa, { expiresIn: '1h' });

                    if (user.is2fa) {
                        if (!user.token_2fa) {
                            const secret = authenticator.generateSecret();
                            const userEmail = user.email ? user.email : (user.name + '@' + user.domain.name);
                            QRCode.toDataURL(authenticator.keyuri(userEmail, 'Access-Control-App', secret), { margin : 7, width : 700 }, (err, url) => {
                                if (err) {
                                    return res.status(200).send({ error: 'Technical Issue!, Please click on send for verify your Email.' });
                                }
                                //console.log(url);
                                sendEmail(
                                    user.domain_id,
                                    {
                                        qr_img_url: url,
                                        host: 'https:\/\/' + req.headers.host,
                                    },
                                    '2fa',
                                    userEmail,
                                    '2FA Authentication',
                                    null,
                                    function (err) {
                                        if (err) {
                                            return res.status(200).send({ error: 'Technical Issue!, Please click on send for verify your Email.' });
                                        }

                                        User.update({ token_2fa: secret }, {
                                            where: {
                                                id: user.id,
                                            },
                                            returning: true,
                                        });

                                        return res.status(200).send({
                                            is2fa: true,
                                            userId: user.id,
                                            userEmail: (user.name + '@' + user.domain.name),
                                            token,
                                            message: 'A 2FA email has been sent to ' + userEmail + '.', // It will be expired soon. 
                                        });
                                    }
                                );

                            })
                        } else {
                            return res.status(200).send({
                                is2fa: true,
                                userId: user.id,
                                token,
                                userEmail: (user.name + '@' + user.domain.name)
                            });
                        }

                    } else {
                        delete req.user.password;
                        let token = tokenForUser(req.user);
                        // generate token and save

                        const result = Session.update({ status: "D", end_time: new Date() }, {
                            where: {
                                uid: req.user.id,
                                status: 'A',
                                role: 'A'
                            },
                            returning: true,
                        });

                        let session = new Session({ session_id: token, role: 'A', status: 'A', uid: req.user.id, start_time: new Date() });
                        session.save();

                        let options = await Option.findAll({
                            where: {
                                'status': 'A'
                            },
                            order: [
                                ['id', 'DESC'],
                            ]
                        });

                        let optionData = {};
                        for (var i = 0; i < options.length; i++) {
                            optionData[options[i].key] = options[i].value;
                        }
                        req.user.dataValues.optionData = optionData;
                        return res.send({ userData: req.user.dataValues, token: token });   //  // For 2FA option, removed token
                    }

                }
            });
            // req.logIn(user, err => {
            //     if(err) throw err
            //     res.send("Success loged in")
            //     console.log(req.user)
            // })
        }
    })(req, res, next);
}

const handleConfirm2fa = async (req, res, next) => {

    if (req.body.email == "") {
        res.status(400).send('Email Required!');
    }
    if (req.body.verify_code == "") {
        res.status(400).send('Verification Code Required!');
    }

    var user_id = req.body.userId;
    var username_domain = req.body.email.split("@");
    var username = "";
    var domain = "";

    if (username_domain.length == 2) {
        username = username_domain[0];
        domain = username_domain[1];
    } else {
        res.status(400).send('Email is invalid!');
    }

    jwt.verify(req.body.token, config.secret_2fa, async (err, user) => {
        if (err) res.status(401).send('Not Authenticated!');

        //req.user = await User.findOne({ where: { id: user.sub }, include: [{ model: Domain }] });

        User.findOne({
            where: { name: username, id: user.sub },
            include: [{
                model: Domain,
                required: true,
                where: {
                    name: domain
                }
            }]
        }).then(async (user) => {
            // user is not found into database
            if (!user) {
                return res.status(400).send('We were unable to find a user with that email. Make sure your Email is correct!');
            }
            // user has been already verified
            else {
                if (authenticator.verify({ secret: user.token_2fa, token: req.body.verify_code })) {
                    let token = tokenForUser(user);
                    // generate token and save
                    const result = Session.update({ status: "D", end_time: new Date() }, {
                        where: {
                            uid: user.id,
                            status: 'A',
                            role: 'A'
                        },
                        returning: true,
                    });

                    let session = new Session({ session_id: token, role: 'A', status: 'A', uid: user.id, start_time: new Date() });
                    session.save();

                    // User.update( {  token_2fa : '' }, {
                    //     where: {
                    //         id : user.id,
                    //     },
                    //     returning: true,
                    // });

                    let options = await Option.findAll({
                        where: {
                            'status': 'A'
                        },
                        order: [
                            ['id', 'DESC'],
                        ]
                    });

                    let optionData = {};
                    for (var i = 0; i < options.length; i++) {
                        optionData[options[i].key] = options[i].value;
                    }
                    user.dataValues.optionData = optionData;
                    return res.send({ userData: user.dataValues, token: token });

                } else {
                    return res.send({ error: "Wrong verification code!" });
                }
            }
        })

    })
}

const createNewUser = async (req, res, next) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.send({ error: 'Username and password must be provided' });
    }

    User.findOne({
        where: {
            name: {
                [Sequelize.Op.like]: username
            }
        }
    }).then(user => {
        if (user) {
            // User exist
            return res.send({ error: 'Username is already in use...' });
        } else {
            // password hashing for save into databse
            req.body.password = Bcrypt.hashSync(req.body.password, 10);
            // create and save user
            user = new User({
                name: username, password: req.body.password
            })
            user.save().then(async function (user) {

                // // generate token and save
                // var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
                // token.save(function (err) {
                //     if(err){
                //         return res.status(500).send({msg:err.message});
                //     }

                //     // Send email (use verified sender's email address & generated API_KEY on SendGrid)
                //     const transporter = nodemailer.createTransport(
                //         sendgridTransport({
                //             auth:{
                //                 api_key:'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',
                //             }
                //         })
                //     )
                //     var mailOptions = { from: 'gerardkasemba@gmail.com', to: user.email, subject: 'Account Verification Link', text: 'Hello '+ req.body.name +',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n' };
                //     transporter.sendMail(mailOptions, function (err) {
                //         if (err) { 
                //             return res.status(500).send({msg:'Technical Issue!, Please click on resend for verify your Email.'});
                //         }
                //         return res.status(200).send('A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.');
                //     })
                // })
                user.dataValues.password = "";
                let options = await Option.findAll({
                    where: {
                        'status': 'A'
                    },
                    order: [
                        ['id', 'DESC'],
                    ]
                });

                let optionData = {};
                for (var i = 0; i < options.length; i++) {
                    optionData[options[i].key] = options[i].value;
                }
                user.dataValues.optionData = optionData;
                res.send({ userData: user.dataValues, token: tokenForUser(user.dataValues) });

            })

        }
    })

}

const confirmAccount = async (req, res, next) => {

    // Token.findOne({ token: req.params.token }, function (err, token) {
    //     // token is not found into database i.e. token may have expired 
    //     if (!token){
    //         return res.status(400).send('Your verification link may have expired. Please click on resend for verify your Email.');
    //     }
    //     // if token is found then check valid user 
    //     else{
    //         User.findOne({ _id: token._userId, email: req.params.email }, function (err, user) {
    //             // not valid user
    //             if (!user){
    //                 return res.status(401).send('We were unable to find a user for this verification. Please SignUp!');
    //             } 
    //             // user is already verified
    //             else if (user.isVerified){
    //                 return res.status(200).send('User has been already verified. Please Login');
    //             }
    //             // verify user
    //             else{
    //                 // change isVerified to true
    //                 user.isVerified = true;
    //                 user.save(function (err) {
    //                     // error occur
    //                     if(err){
    //                         return res.status(500).send({msg: err.message});
    //                     }
    //                     // account successfully verified
    //                     else{
    //                       return res.status(200).send('Your account has been successfully verified');
    //                     }
    //                 });
    //             }
    //         });
    //     }

    // });
}

const resendToken = async (req, res, next) => {

    User.findOne({ email: req.body.email }, function (err, user) {
        // user is not found into database
        if (!user) {
            return res.status(400).send('We were unable to find a user with that email. Make sure your Email is correct!');
        }
        // user has been already verified
        else if (user.isVerified) {
            return res.status(200).send('This account has been already verified. Please log in.');

        }
        // send verification link
        else {
            // generate token and save
            // var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
            // token.save(function (err) {
            //     if (err) {
            //       return res.status(500).send({msg:err.message});
            //     }

            //     // Send email (use verified sender's email address & generated API_KEY on SendGrid)
            //         const transporter = nodemailer.createTransport(
            //             sendgridTransport({
            //                 auth:{
            //                     api_key:process.env.SENDGRID_APIKEY,
            //                 }
            //             })
            //         )
            //         var mailOptions = { from: 'gerardkasemba@gmail.com', to: user.email, subject: 'Account Verification Link', text: 'Hello '+ user.name +',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n' };
            //         transporter.sendMail(mailOptions, function (err) {
            //            if (err) { 
            //             return res.status(500).send('Technical Issue!, Please click on resend for verify your Email.');
            //          }
            //         return res.status(200).send('A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.');
            //     });
            // });
        }
    })
}

const accessToken = async (req, res, next) => {
    const { access_token } = req.body;
    const error = 'Invalid access token detected';
    try {
        jwt.verify(access_token, config.secret, async (err, token_decoded) => {
            if (err) {
                res.send({ error });
            }
            User.findOne({ where: { id: token_decoded.sub }, include: [{ model: Domain }] }).then(async (user) => {

                if (user) {

                    let options = await Option.findAll({
                        where: {
                            'status': 'A'
                        },
                        order: [
                            ['id', 'DESC'],
                        ]
                    });

                    let optionData = {};
                    for (var i = 0; i < options.length; i++) {
                        optionData[options[i].key] = options[i].value;
                    }
                    user.dataValues.optionData = optionData;
                    let new_token = tokenForUser(user.dataValues);

                    // const result = await Session.update( { session_id: new_token }, {
                    //     where: {
                    //       uid : user.id,
                    //       status: 'A',
                    //       role: 'A',
                    //       session_id: access_token
                    //     },
                    //     returning: true,
                    //   });

                    res.send({ userData: user.dataValues, access_token: new_token });
                } else {
                    res.send({ error });
                }
            });
        })
    } catch (e) {
        res.send({ error });
    }
}

const logoutUser = async (req, res, next) => {
    const result = await Session.update({ status: "D", end_time: new Date() }, {
        where: {
            uid: req.user.id,
            status: 'A',
            role: 'A'
        },
        returning: true,
    });
    return res.send({ result });
}

const handleRequestResetPassword = async (req, res, next) => {

    if (req.body.email == "") {
        res.status(400).send('Email Required!');
    }
    var username_domain = req.body.email.split("@");
    var username = "";
    var domain = "";

    if (username_domain.length == 2) {
        username = username_domain[0];
        domain = username_domain[1];
    } else {
        res.status(400).send('Email is invalid!');
    }
    User.findOne({
        where: { name: username },
        include: [{
            model: Domain,
            required: true,
            where: {
                name: domain
            }
        }]
    }).then(async (user) => {
        // user is not found into database
        if (!user) {
            return res.status(400).send('We were unable to find a user with that email. Make sure your Email is correct!');
        }
        // user has been already verified
        else {
            // generate token and save
            const token = crypto.randomBytes(16).toString('hex');
            await user.update({
                reset_password_token: token,
                reset_password_expires: Date.now() + 3600000
            });
            const userEmail = user.email ? user.email : (user.name + '@' + user.domain.name);
            sendEmail(
                user.domain_id,
                {
                    reset_url: `${req.headers.origin}\/#\/reset-password\/${user.id}\/${token}`,
                    host: 'https:\/\/' + req.headers.host,
                },
                'reset_password',
                userEmail,
                'Link To Reset Password',
                [],
                function (err) {
                    if (err) {
                        return res.status(200).send({ error: 'Technical Issue!, Please click on send for verify your Email.' });
                    }
                    return res.status(200).send({ message: 'A reset-password email has been sent to ' + req.body.email + '. It will be expired after one hour.' });
                }
            );

        }
    })
}

const handleResetPassword = async (req, res, next) => {
    try {
        let adminid = req.params.adminid;
        let token = req.params.token;
        console.log(token, adminid)
        User.findOne({
            where: { id: adminid, reset_password_token: token, reset_password_expires: { [Sequelize.Op.gt]: new Date() } },
            include: [{
                model: Domain,
            }]
        }).then((user) => {
            // user is not found into database
            if (!user) {
                return res.status(500).send({ error: 'Password reset link is invalid or has expired.' });
            }
            // user has been already verified
            else {
                // generate token and save
                res.status(200).send({ email: user.name + '@' + user.domain.name, message: "Password reset link a-OK." })
            }
        })
    } catch (error) {
        res.status(500).send({ error: "An error occured" });
        console.log(error);
    }
}

const handleUpdatePassword = async (req, res, next) => {

    if (req.body.email == "") {
        res.status(400).send('Email Required!');
    }
    var username_domain = req.body.email.split("@");
    var username = "";
    var domain = "";

    if (username_domain.length == 2) {
        username = username_domain[0];
        domain = username_domain[1];
    } else {
        res.status(400).send('Email is invalid!');
    }
    User.findOne({
        where: { name: username },
        include: [{
            model: Domain,
            required: true,
            where: {
                name: domain
            }
        }]
    }).then((user) => {
        // user is not found into database
        if (!user) {
            return res.status(500).send({ 'error': 'We were unable to find a user with that email. Make sure your Email is correct!' });
        }
        else {
            let new_pass = Bcrypt.hashSync(req.body.password, 10);
            user.update({
                password: new_pass,
                reset_password_token: null,
                reset_password_expires: null
            }).then(() => {
                res.status(200).send({ "message": "Password Updated." })
            });
        }
    })
}

const getAllAdmins = async (req, res, next) => {

    let where_domain_cond = {};
    if (!req.user.dataValues.issuperadmin) {
        where_domain_cond = { "domain_id": req.user.domain_id, 'status': 'A' };
    }
    User.findAll({
        where: { ...where_domain_cond, status: { [Sequelize.Op.not]: 'D' } },
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ],
        include: [{
            model: Domain,
        }]
    }).then((adminLists) => {
        // Hide the password
        adminLists.map(async admin => {
            admin.dataValues.password = ''
        })

        res.send({
            admins: adminLists
        });
    });
}

const getAdmin = async (req, res, next) => {
    const domain_list = await Domain.findAll({
        where: { status: { [Sequelize.Op.not]: 'D' } },
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ]
    });

    let where_user_cond = { id: 0 };

    if (req.query.adminId) {
        where_user_cond = { id: req.query.adminId };
    }
    else if (req.query.adminName) {
        if (req.query.domainId)
            where_user_cond = { domain_id: req.query.domainId, name: req.query.adminName };
        else if (!req.user.dataValues.issuperadmin)
            where_user_cond = { domain_id: req.user.domain_id, name: req.query.adminName };
    }

    User.findOne({
        //where: where_user_cond,
        where: { ...where_user_cond, status: { [Sequelize.Op.not]: 'D' } },
        include: [{
            model: Domain,
        }]
    }).then(async admin => {
        if (admin) {
            // Admin exists
            admin.dataValues.password = "";
            admin.dataValues.domain_list = domain_list;

            const sessions_recent = await Session.findAll({
                where: { role: "A", uid: admin.id },
                order: [["start_time", "DESC"]],
                limit: 5,
                offset: 0,
            })
            admin.dataValues.sessions_recent = sessions_recent;
            return res.send(admin.dataValues);
        } else {
            return res.send({ error: 'Admin dosnt exist...' });
        }
    })
}

const saveAdmin = async (req, res, next) => {
    let { id, name, email, status, domain_id, password } = req.body
    if (!name) {
        return res.send({ error: 'Admin Name must be provided' });
    }
    let issuperadmin = false;
    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    } else {
        issuperadmin = (domain_id == req.user.domain_id);
    }

    if (!domain_id) {
        return res.send({ error: 'Domain must be provided' });
    }

    if (password) {
        password = Bcrypt.hashSync(password, 10);
    }

    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    User.findOne({
        where: {
            id: id
        }
    }).then(async admin => {
        if (admin) {
            // User exist
            let sameadmin = await User.findOne({ where: { name, domain_id, id: { [Sequelize.Op.not]: id } } });
            if (sameadmin) {
                return res.send({ error: 'Admin Name is already in use on the same domain...' });
            }

            const result = await User.update({ status, name, email, domain_id, password }, {
                where: {
                    id,
                },
                returning: true,
            });
        } else {
            let sameadmin = await User.findOne({ where: { name, domain_id } });
            if (sameadmin) {
                return res.send({ error: 'Admin Name is already in use on the same domain...' });
            }

            admin = new User({
                name, email, status, domain_id, password, issuperadmin
            })

            console.log("Joe", admin.is2fa)

            try {
                const savedAdmin = await admin.save();
                id = savedAdmin.dataValues.id;

                // Copying config file from superadmin
                fs.copyFile(__dirname + "/../config/config_1.json", __dirname + `/../config/config_${domain_id}.json`, (err) => {
                    if (err) {
                        console.log("Oops! An Error Occured:", err);
                    }
                    else {
                        // Printing the current file name after executing the function
                        console.log("File Contents of async_copied_file:",
                            fs.readFileSync(__dirname + "/../config/config_1.json", "utf8"));
                    }
                });

            } catch (error) {
                res.send(error)
            }

        }
        const domain_list = await Domain.findAll({
            where: {},
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });

        User.findOne({
            where: { id },
            include: [{
                model: Domain,
            }]
        }).then(admin => {
            if (admin) {
                // Admin exists
                admin.dataValues.password = "";
                admin.dataValues.domain_list = domain_list;
                return res.send(admin.dataValues);
            } else {
                return res.send({ error: 'Admin doesn\'t exist...' });
            }
        })
    });
}

const deleteAdmins = async (req, res, next) => {
    let { selectedIds } = req.body
    for (var id of selectedIds) {
        await User.findOne({ where: { id: id } }).then(async admin => {
            if (admin) {
                // User exist
                
                const result = await User.update({ status:'D', name:'__DELETED__'+Date.now()+'__'+admin.name, }, {
                    where: {
                        id,
                    },
                    returning: true,
                });

                //admin.status = 'D';
                //admin.name = '__DELETED__'+Date.now()+'__'+admin.name;
                //await admin.save();

            } else {

            }
        })
    }
    return res.send({ message: 'Deleted...' });
}

const deleteAdmin = async (req, res, next) => {
    domain_id = req.params.did;
    if (!req.user.dataValues.issuperadmin) {
        domain_id = req.user.domain_id;
    }

    var nope = false;
    await User.findOne({ where: { domain_id: domain_id, name: req.params.name } }).then(async admin => {
        if (admin) {
            const result = await User.update({ status:'D', name:'__DELETED__'+Date.now()+'__'+admin.name, }, {
                where: {
                    id: admin.id,
                },
                returning: true,
            });
        } else {
            nope = true;
        }
    })

    if (nope)
        return res.send({ message: 'No such admin...' });

    return res.send({ message: 'Deleted...' });
}

const getProfile = async (req, res, next) => {
    const domain_list = await Domain.findAll({
        where: {},
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ]
    });
    User.findOne({
        where: { id: req.user.id },
        include: [{
            model: Domain,
        }]
    }).then(async admin => {
        if (admin) {
            // User exist
            admin.dataValues.password = "";
            admin.dataValues.domain_list = domain_list;

            const sessions_recent = await Session.findAll({
                where: { role: "A", uid: admin.id },
                order: [["start_time", "DESC"]],
                limit: 5,
                offset: 0,
            })
            admin.dataValues.sessions_recent = sessions_recent;
            return res.send(admin.dataValues);
        } else {
            return res.send({ error: 'Admin dosnt exist...' });
        }
    })
}

const saveProfile = async (req, res, next) => {
    let { id, name, email, status, domain_id, old_password, password, confirm_password } = req.body
    if (!name) {
        return res.send({ error: 'Admin Name must be provided' });
    }
    if (!req.user.dataValues.issuperadmin || !domain_id) {
        domain_id = req.user.domain_id;
    }
    if (!domain_id) {
        return res.send({ error: 'Domain must be provided' });
    }

    if (password) {
        if (password != confirm_password) {
            return res.send({ error: 'Password not matched' });
        }
        if (!old_password) {
            return res.send({ error: 'Old Password must be provided' });
        }

        password = Bcrypt.hashSync(password, 10);

    }

    let sameadmin = await User.findOne({ where: { name, domain_id, id: { [Sequelize.Op.not]: id } } });
    if (sameadmin) {
        return res.send({ error: 'Admin Name is already in use on the same domain...' });
    }

    if (!(id === parseInt(id, 10))) {  // is Integer
        id = 0;
    }

    User.findOne({
        where: {
            id: id
        }
    }).then(async admin => {
        if (admin) {
            // User exist
            if (password) {
                let isMatch = await Bcrypt.compare(old_password, admin.dataValues.password);
                if (!isMatch) {
                    return res.send({ error: 'Old password is wrong...' });
                }

                const result = await User.update({ email, password }, {
                    where: {
                        id,
                    },
                    returning: true,
                });
            } else {
                const result = await User.update({ email }, {
                    where: {
                        id,
                    },
                    returning: true,
                });
            }

        } else {
            return res.send({ error: 'Admin doesn\'t exist...' });
        }
        const domain_list = await Domain.findAll({
            where: {},
            order: [
                ['id', 'DESC'],
                ['name', 'ASC'],
            ]
        });

        User.findOne({
            where: { id },
            include: [{
                model: Domain,
            }]
        }).then(admin => {
            if (admin) {
                // User exist
                admin.dataValues.password = "";
                admin.dataValues.domain_list = domain_list;
                return res.send(admin.dataValues);
            } else {
                return res.send({ error: 'Admin doesn\'t exist...' });
            }
        })
    });
}

const save2FA = async (req, res, next) => {
    let { is2fa, sendEmail2FA } = req.body
    console.log(req.user.id);
    let { id, email, name, domain, domain_id } = req.user;

    if (!id) {
        return res.send({ error: 'Unknown User' });
    }

    if (is2fa) {

        const secret = authenticator.generateSecret();
        const userEmail = email ? email : (name + '@' + domain.name);
        QRCode.toDataURL(authenticator.keyuri(userEmail, 'Access-Control-App', secret),{ margin : 7, width : 700 }, (err, url) => {
            if (err) {
                return res.status(200).send({ error: 'Technical Issue on sending email!' });
            }
            //console.log(url);
            if (sendEmail2FA) {
                sendEmail(
                    domain_id,
                    {
                        qr_img_url: url,
                        host: 'https:\/\/' + req.headers.host,
                    },
                    '2fa',
                    userEmail,
                    '2FA Authentication',
                    null,
                    function (err) {
                        if (err) {
                            //return res.status(200).send({ error: 'Technical Issue on sending email!' });
                        }
                    }
                );
            }

            User.update({ is2fa: true, token_2fa: secret }, {
                where: {
                    id,
                },
                returning: true,
            });

            return res.status(200).send({
                is2fa: true,
                qrcode: url,
                userId: id,
                userEmail: (name + '@' + domain.name),
                message: sendEmail2FA?'A 2FA email has been sent to ' + userEmail + '.':'2FA enabled successfully.', 
            });  // It will be expired soon.
        })

    } else {
        const result = await User.update({ is2fa: false, token_2fa: '' }, {
            where: {
                id,
            },
            returning: true,
        });
        return res.send({ is2fa: false, message: '2FA disabled successfully.', qrcode: null });
    }

}

module.exports = {
    loginUser,
    createNewUser,
    confirmAccount,
    resendToken,
    accessToken,
    logoutUser,
    getAllAdmins,
    getAdmin,
    saveAdmin,
    deleteAdmins,
    deleteAdmin,
    handleRequestResetPassword,
    handleResetPassword,
    handleUpdatePassword,
    handleConfirm2fa,
    getProfile,
    saveProfile,
    save2FA,
};