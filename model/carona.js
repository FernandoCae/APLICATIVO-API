
const { Sequelize } = require('sequelize');
const database = require('../db/database');

const Carona = database.define('carona',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
},

parada:{
    type: Sequelize.STRING
},

partida_hora:{
    type: Sequelize.INTEGER,
    allowNull:false,
},

//HORA DE CHEGADA
hora:{
    type: Sequelize.INTEGER
},

data:{
    type: Sequelize.INTEGER
},

saldo:{
    type: Sequelize.INTEGER
},

valorcorrida:{
    type: Sequelize.INTEGER
},

extrato:{
    type: Sequelize.INTEGER
},

});

module.exports = Carona;

