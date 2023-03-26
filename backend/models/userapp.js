const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
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

const UserApp = sequelize.define('userapp', userSchema,{
  timestamps: false,
  tableName: 'user_access_control'
})
module.exports = UserApp
