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
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: false
    }   
}

const GroupMember = sequelize.define('groupmember', userSchema,{
  timestamps: false,
  tableName: 'group_members'
})
module.exports = GroupMember
