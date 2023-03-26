var express = require('express');
var router = express.Router();
var passport = require("passport");
const jwt = require('jsonwebtoken');
const config = require('../config');

const authorize = require('../_middleware/authorize')

const Joi = require('joi');
const validateRequest = require('../_middleware/validate-request');

var admins = require('../controllers/admins');
var domains = require('../controllers/domains');
var groups = require('../controllers/groups');
var gwgroups = require('../controllers/gwgroups');
var users = require('../controllers/users');
var services = require('../controllers/services');
var apps = require('../controllers/apps');
var dashboard = require('../controllers/dashboard');
var downloads = require('../controllers/downloads');
var settings = require('../controllers/settings');
var options = require('../controllers/options');

const User = require('../models/user');
const Domain = require('../models/domain');
const Session = require('../models/session');

const requireJwtAuth = passport.authenticate('jwt', {
  session: false
});

// jwt verify from heaer Authorizaton Bearer ...  
function authenticateToken(req, res, next) {    
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, config.secret, async (err, user) => {
    if (err) return res.sendStatus(401);   

    // 1. Method Token Black List 

    // let session = await Session.findOne( { where: { session_id: token, status:'A' } });
    // if( session ){
    //   req.user = await User.findOne({ where: { id: user.sub }, include: [{ model: Domain }] });
    //   next();
    // } else {
    //   return res.sendStatus(401);
    // }

    // 2 Method
    
    req.user = await User.findOne({ where: { id: user.sub }, include: [{ model: Domain }] });
    next();
    
  })
}

function authenticateSchema(req, res, next) { 
  const schema = Joi.object({
      email: Joi.string().required(),
      password: Joi.string().min(6).required()
  });
 
  validateRequest(req, next, schema);
}
    
function registerSchema(req, res, next) {
  const schema = Joi.object({
      FirstName: Joi.string().required(),
      LastName: Joi.string().required(),
      Username: Joi.string().required(),
      Password: Joi.string().min(6).required(),
      PrimaryEmail: Joi.string().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
      displayName: Joi.string().empty(''),
      email: Joi.string().empty(''),
      password: Joi.string().min(6).empty(''),
      avatar: Joi.string().empty(),
      aboutme: Joi.string().empty(),
  });
  validateRequest(req, next, schema);
}

function register(req,res)
{ 
    // router.put('/:id', authorize(), updateSchema, update);
    // Added
    //route.post('auth/register', registerSchema, admins.register);
    //route.post('auth/login', authenticateSchema, admins.login);

    router.get('/confirmation', admins.confirmAccount);
    router.post('/register', admins.createNewUser);
    router.post('/resendtoken', admins.resendToken);
    router.post('/auth/access-token', admins.accessToken);
    router.post('/login', admins.loginUser );
    router.get('/logout', authenticateToken,  admins.logoutUser );
    router.post('/request-reset-password', admins.handleRequestResetPassword );
    router.get('/reset-password/:adminid/:token', admins.handleResetPassword );
    router.post('/update-password', admins.handleUpdatePassword );
    router.post('/2fa-confirm', admins.handleConfirm2fa );


    // Domains 
    router.get('/domains', authenticateToken, domains.getDomains );
    router.post('/domains/save', authenticateToken, domains.saveDomain );
    router.get('/domain', authenticateToken, domains.getDomain );
    router.post('/domains/delete', authenticateToken, domains.deleteDomains );
    router.delete('/domain/:name', authenticateToken, domains.deleteDomain );
    router.post('/domains/uploadimage', authenticateToken, domains.uploadImageDomains );
    
    // Admins
    router.get('/admins', authenticateToken, admins.getAllAdmins );
    router.get('/admin', authenticateToken, admins.getAdmin );
    router.post('/admins/save', authenticateToken, admins.saveAdmin );
    router.post('/admins/delete', authenticateToken, admins.deleteAdmins );
    router.delete('/admin/:did/:name', authenticateToken, admins.deleteAdmin );

    router.get('/profiles', authenticateToken, admins.getProfile );
    router.post('/profiles/save', authenticateToken, admins.saveProfile );
    router.post('/2fasave', authenticateToken, admins.save2FA );  

    // Domains 
    router.get('/domains',authenticateToken, domains.getDomains );
    router.post('/domains/save', authenticateToken, domains.saveDomain );
    router.get('/domain', authenticateToken, domains.getDomain );
    router.get('/domain/:name', authenticateToken, domains.getDomain2 );
    router.post('/domains/delete', authenticateToken, domains.deleteDomains );
    router.delete('/domain/:name', authenticateToken, domains.deleteDomain );
    router.post('/domains/uploadimage', authenticateToken, domains.uploadImageDomains );

    // Groups 
    router.get('/groups', authenticateToken, groups.getGroups );
    router.post('/groups/save', authenticateToken, groups.saveGroup );
    router.post('/group/rename', authenticateToken, groups.renameGroup );
    router.post('/group/access', authenticateToken, groups.accessGroup );
    router.get('/group', authenticateToken, groups.getGroup );
    router.post('/groups/delete', authenticateToken, groups.deleteGroups );
    router.delete('/group/:name', authenticateToken, groups.deleteGroup );
    
    // Users 
    router.get('/users', authenticateToken, users.getAllUsers );
    router.post('/users/save', authenticateToken, users.saveUser );
    router.post('/user/rename', authenticateToken, users.renameUser );
    router.post('/user/group', authenticateToken, users.groupUser );
    router.post('/user/access', authenticateToken, users.accessUser );
    router.get('/user', authenticateToken, users.getUser );
    router.post('/users/delete', authenticateToken, users.deleteUsers );
    router.delete('/user/:name', authenticateToken, users.deleteUser );
    router.post('/user/json', authenticateToken, users.downloadTemplate );
    router.post('/user/email', authenticateToken, users.emailTemplate );

    // Services 
    router.get('/services', authenticateToken, services.getAllServices );
    router.post('/services/save', authenticateToken, services.saveService );
    router.post('/service/rename', authenticateToken, services.renameService );
    router.get('/service', authenticateToken, services.getService );
    router.post('/services/delete', authenticateToken, services.deleteServices );
    router.delete('/service/:name', authenticateToken, services.deleteService );
    router.post('/service/json', authenticateToken, services.downloadTemplate );
    router.post('/service/email', authenticateToken, services.emailTemplate );
    router.post('/service/group', authenticateToken, services.groupService );

    // Gateway Groups 
    router.get('/gwgroups', authenticateToken, gwgroups.getGroups );
    router.post('/gwgroups/save', authenticateToken, gwgroups.saveGroup );
    router.post('/gwgroup/rename', authenticateToken, gwgroups.renameGroup );
    router.get('/gwgroup', authenticateToken, gwgroups.getGroup );
    router.post('/gwgroups/delete', authenticateToken, gwgroups.deleteGroups );
    router.delete('/gwgroup/:name', authenticateToken, gwgroups.deleteGroup );

    // Applications
    router.get('/apps', authenticateToken, apps.getAllApps );
    router.post('/apps/save', authenticateToken, apps.saveApp );
    router.get('/app', authenticateToken, apps.getApp );
    router.post('/apps/delete', authenticateToken, apps.deleteApps );

    // Dahsboard Data
    router.get('/dashboard', authenticateToken, dashboard.getData );

    // Downloads
    router.get('/downloads', authenticateToken, downloads.getAllDownloads );
    router.get('/download/:filename', authenticateToken, downloads.getDownload );
    router.post('/downloads/save', authenticateToken, downloads.saveDownload );
    router.post('/downloads/delete', authenticateToken, downloads.deleteDownloads );

    // Settings
    router.get('/settings', authenticateToken, settings.getSettings );
    router.post('/settings/save', authenticateToken, settings.saveSettings );

    // options - UI
    router.get('/options',  options.getOptions );
    router.post('/options/save', authenticateToken, options.saveOptions );
    router.post('/options/uploadimage', authenticateToken, options.uploadOptionImage );
    
}

register();
exports.register = router;