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
        allowNull: false
    },
    domain_id: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
}

const GwGroup = sequelize.define('gw_group', userSchema,{
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
  tableName: 'gw_groups'
});

GwGroup.belongsTo(Domain, {targetKey:'id',foreignKey: 'domain_id'});

module.exports = GwGroup
