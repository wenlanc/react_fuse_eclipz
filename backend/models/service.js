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
    domain_id: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    },
    // row_password: {
    //   type: Sequelize.STRING
    // },
    icon: {
      type: Sequelize.INTEGER
    },
    wg_key: {
      type: Sequelize.STRING
    },
    virtual_ip: {
      type: Sequelize.STRING
    },
    public_ip: {
      type: Sequelize.STRING
    },
    local_ip: {
      type: Sequelize.STRING
    }
}

const Service = sequelize.define('service', userSchema, {
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
  tableName: 'services'
});

Service.belongsTo(Domain, {targetKey:'id',foreignKey: 'domain_id'});

module.exports = Service
