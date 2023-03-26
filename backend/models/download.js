const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    filename: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW 
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
    },
    
}

const Download = sequelize.define('download', userSchema,{
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
  },
  tableName: 'downloads'
})
module.exports = Download
