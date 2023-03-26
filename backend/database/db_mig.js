// Importing the database model
const sequelize = require('./database')
const Sequelize = require('sequelize')
// Importing the user model
const User = require('../models/user')

// Creating all the tables defined in user
sequelize.sync()

// You can change the user.js file
// And run this code to check if it overwrites the existing code.
sequelize.sync({force:true})

