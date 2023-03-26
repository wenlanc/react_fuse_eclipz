const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const ClientUser = require('./clientuser');
const Service = require('./service');

const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    initiator_role: {
        type: Sequelize.STRING,
    },
    responder_role: {
      type: Sequelize.STRING,
    },
    initiator_uid: {
      type: Sequelize.INTEGER
    },
    responder_uid: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    enclave_id: {
      type: Sequelize.STRING
    },
    start_time: {
      type: Sequelize.DATE
    },
    end_time: {
      type: Sequelize.DATE
    },
    initiator_rxbytes: {
      type: Sequelize.INTEGER
    },
    initiator_txbytes: {
      type: Sequelize.INTEGER
    },
    responder_rxbytes: {
      type: Sequelize.INTEGER
    },
    responder_txbytes: {
      type: Sequelize.INTEGER
    }

}

const Enclave = sequelize.define('enclave', userSchema, {
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
  tableName: 'enclaves'
});
Enclave.belongsTo(ClientUser, {targetKey:'id',foreignKey: 'initiator_uid'});
Enclave.belongsTo(Service, {targetKey:'id',foreignKey: 'responder_uid'});

module.exports = Enclave
