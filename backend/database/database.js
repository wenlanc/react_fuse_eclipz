const Sequelize = require('sequelize')
const config = require('./database.json');
// create db if it doesn't already exist
const { host, port, user, password, database } = config;
var sequelize = new Sequelize(
   {
      database: process.env.PGDATABASE || database,
      username: process.env.PGUSER || user,
      password: process.env.PGPASSWORD || password,
      host:     process.env.PGHOST || host,
      port:     process.env.PGPORT || port,
      dialect: "postgres",
      dialectOptions: {
      //   ssl: {
      //     require: false,  // true
      //     rejectUnauthorized: false // <<<<<<< YOU NEED THIS
      //   }
      },
    }
);
//const sequelize = new Sequelize('postgres://postgres:postgre@localhost:5433/acm_db?sslmode=no-verify');
module.exports = sequelize