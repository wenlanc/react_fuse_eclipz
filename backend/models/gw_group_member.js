const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    gw_group_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    gateway_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }   
}

const GwGroupMember = sequelize.define('gwgroupmember', userSchema,{
  timestamps: false,
  tableName: 'gw_group_members'
})
module.exports = GwGroupMember
