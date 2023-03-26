const sequelize = require('../database/database')
const Sequelize = require('sequelize');
const Domain = require('./domain');

const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    key: {
      type: Sequelize.STRING,
    },
    value: {
      type: Sequelize.STRING,
    },
    domain_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }     
}

const Settings = sequelize.define('options', userSchema,{
  timestamps: false,
  tableName: 'options'
});
Settings.belongsTo(Domain, {targetKey:'id',foreignKey: 'domain_id'});

module.exports = Settings
