const bcrypt = require('bcrypt-nodejs');
const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const Domain = require('./domain');
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    domain_id: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    issuperadmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    reset_password_token : {
      type: Sequelize.STRING,
      defaultValue: null
    } ,
    reset_password_expires : {
      type: Sequelize.DATE,
      defaultValue: null
    },
    is2fa : {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    token_2fa : {
      type: Sequelize.STRING,
      defaultValue: null
    }
}

const User = sequelize.define('admin', userSchema, {
  defaultScope: {
    // exclude hash by default
   // attributes: { exclude: ['password'] }
  },
  scopes: {
      // include hash with this scope
      withHash: { attributes: {}, }
  },
  timestamps: false,
  hooks: {
  	// beforeCreate: (user, options) => {
  	//   return new Promise((resolve, reject) => {
    //     bcrypt.genSalt(10, (err, salt) => {
    //       if (err) { reject(err) }
    //       return bcrypt.hash(user.password, salt, null, (err, hash) => {
    //         if (err) { reject(err) }
    //           user.password = hash;
    //           resolve()
    //       })
    //     })
    //   })
  	// }
  },
  tableName: 'admins'
})

User.belongsTo(Domain, {targetKey:'id',foreignKey: 'domain_id'});

// User.prototype.comparePassword = function (candidatePassword, callback) {
//   /**
//    * @param{encrypted is a field of}
//    */
//   bcrypt.compare(candidatePassword, this.encrypted, (err, isMatch) => {
//     if (err) return callback(err)
//     callback(null, isMatch)
//   })
// }
module.exports = User
