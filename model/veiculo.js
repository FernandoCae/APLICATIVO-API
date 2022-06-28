const { Sequelize } = require('sequelize');
const database = require('../db/database');

const Veiculo = database.define('veiculo',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
},

motorista:{
    type:Sequelize.STRING,
    allowNull:false
},

placa_veiculo:{
    type:Sequelize.STRING
},

modelo_veiculo:{
    type:Sequelize.STRING
},

cor_bimo:{
    type:Sequelize.STRING
},

categoria_cnh:{
    type:Sequelize.STRING
},

tipo_veiculo:{
    type:Sequelize.INTEGER
},

nr_cnh:{
    type:Sequelize.INTEGER
},

});

module.exports = Veiculo;


        
       
        
        