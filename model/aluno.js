
const { Sequelize } = require('sequelize');
const database = require('../db/database');

const Aluno = database.define('aluno',{
id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
},

nome:{
    type:Sequelize.STRING,
    allowNull:false
},

matricula:{
    type:Sequelize.INTEGER,
},

descricao:{
    type:Sequelize.STRING
},

foto:{
    type:Sequelize.STRING
},

datanascimento:{
    type:Sequelize.STRING
},

email:{
    type:Sequelize.STRING
},

turno:{
    type:Sequelize.STRING
},

turma:{
    type:Sequelize.STRING
},

curso:{
    type:Sequelize.STRING
},

sexo:{
    type:Sequelize.STRING
},

categoria:{
    type:Sequelize.STRING
},

telefone:{
    type:Sequelize.INTEGER
,}

});

module.exports = Aluno;