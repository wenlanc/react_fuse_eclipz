const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    group_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    app_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    }     
}

const GroupApp = sequelize.define('groupapp', userSchema,{
  timestamps: false,
  tableName: 'group_access_control'
})
module.exports = GroupApp
