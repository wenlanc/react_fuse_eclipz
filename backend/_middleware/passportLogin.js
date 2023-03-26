const LocalStrategy = require('passport-local').Strategy
const Bcrypt = require('bcryptjs')

const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const config = require('../config');
const User = require('../models/user')
const Domain = require('../models/domain')
const Sequelize = require('sequelize')

module.exports = function(passport){ 
    passport.use(
        new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, (email, password, done) => { 
                let name_domain = email.split('@');
                if(name_domain.length != 2) {
                    return done(null, false, 'The username ' + email + ' is not associated with any account. please check and try again!')
                } 
                // Match User
                User.findOne(
                    { 
                        where: {
                            name: {
                                [Sequelize.Op.like]: name_domain[0]
                            }
                            // , sequelize.col('employee.manager.id') : id 
                        },
                        include: [{
                            model: Domain,
                            required: true,
                             where: {
                                name : {
                                    [Sequelize.Op.like]: name_domain[1]
                                }
                             }
                        }]
                    }
                )
                    .then(user => { 
                        if(!user){
                            return done(null, false, 'The username ' + email + ' is not associated with any account. please check and try again!')
                        }
                        // Match Password
                        Bcrypt.compare(password, user.dataValues.password, (err, isMatch) => { 
                            if(isMatch) {
                                // check user is verified or not
                                if (!user.isVerified){
                                    //return done(null, false, 'Your Email has not been verified. Please click on resend')
                                } 
                                return done(null, user)
                            }
                            else {
                                return done(null, false, err)
                            }
                        })
                    })
                    .catch(err => { return done(err); } )
        })
    )
    
    passport.serializeUser((user, done) => {
        done(null, user.id)
    })
    passport.deserializeUser((id, done) => {
        User.findOne({ id }, (err, user) => {
            done(err, user)
        })
    })


    // setting the jwt strategy
    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: config.secret
    };

    passport.use( 
        new JwtStrategy(jwtOptions, function (payload, done) {
            
            // jwt.verify(token, "nodeauthsecret", function (err, data) {
            //     console.log(err, data);
            //   });
              
            User.findById(payload.sub)
            .then((user) => {
                if (user) {
                done(null, user);
                } else {
                done(null, false);
                }
            })
            .catch((err) => done(err, false));
        })
      )

}