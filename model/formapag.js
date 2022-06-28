
const { Sequelize } = require('sequelize');
const database = require('../db/database');

const formapag = database.define('formapag',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
},

transferencia:{
    type:Sequelize.STRING,
    allowNull:false
},

});

module.exports = formapag;