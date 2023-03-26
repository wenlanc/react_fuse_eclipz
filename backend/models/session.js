const sequelize = require('../database/database')
const Sequelize = require('sequelize')
const userSchema = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    uid: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: 'A',
      allowNull: false
    },
    role: {
      type: Sequelize.STRING
    },
    session_id: {
      type: Sequelize.STRING
    },
    start_time: {
      type: Sequelize.DATE
    },
    end_time: {
      type: Sequelize.DATE
    }
}

const Session = sequelize.define('session', userSchema, {
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
  tableName: 'sessions'
});

module.exports = Session
