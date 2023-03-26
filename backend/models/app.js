const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const Service = require('./service');

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
    service_id: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    allowed_ips: {
      type: Sequelize.STRING
    }
}

const App = sequelize.define('app', userSchema, {
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
  tableName: 'apps'
});

App.belongsTo(Service, {targetKey:'id',foreignKey: 'service_id'});

module.exports = App
