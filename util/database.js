// sequelize use mysql2 behind the scene

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete' , 'root', 'Nahum13@', {
   dialect: 'mysql',
   host: 'localhost'
});

module.exports = sequelize;
