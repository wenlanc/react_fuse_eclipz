const sequelize = require('../database/database')
const Sequelize = require('sequelize')

const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    key: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    value: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    }
}

const Option = sequelize.define('option', userSchema, {
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
  tableName: 'options'
});

module.exports = Option
