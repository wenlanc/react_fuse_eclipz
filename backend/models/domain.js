const sequelize = require('../database/database')
const Sequelize = require('sequelize')
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
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    image: {
      type: Sequelize.STRING,
    },
    icon: {
      type: Sequelize.STRING,
    },
    
}

const Domain = sequelize.define('domain', userSchema,{
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
  tableName: 'domains'
})
module.exports = Domain
