// Importando dependencias internas
const formapagModelo = require('../model/formapag');

//controller para criar formapag 
const criar = async (req, res) => {
    // Obteno dados vindo do formulario ou via REST POST
    const {transferencia} = req.body;
    const resultadoCreate = await formapagModelo.create({
        transferencia
    });
    console.log('Criou formapag >>>', resultadoCreate);
    res.json({status: true});
};

//controller para alterar formapag
const alterar = async (req, res) => {
    //Obtendo dados vindos do formulario ou via REST POST
    const {transferencia} = req.body;


    //Buscar o formapag no banco para alteraçao
    const formapag = await formapag.findByPk(1);
    formapag.transferencia = transferencia;

    const resultadoCreate = await formapagModelo.create({
        
    })
    console.log('alterou formapag >>>', resultadoCreate);
    res.json({status: true});
};

//controler para excluir formapag
const excluir = async (req, res) => {
    //obtendo id para formapag ser buscado
    const {id} = req.params;

    //Buscar formapag para excluir
    const formapag = await formapagModelo.findByPk(1);
    formapag.destroy();
    console.log('Excluido formapag >>>', {id});
    res.json({formapag});
};

//controller para detalhar/buscar formapag
const detalhar = async (req, res) => {
    //Obtendo id para formapag ser buscado
    const {id} = req.params

    //buscar formapag no banco
    const formapag = await formapagModelo.findByPk(1);
    console.log('Obteve o formapag >>>', {id});
    res.json({ formapag });
};

//controle para listar formapag
const listar = async(req, res) =>{
    //listando todos formapags
    const formapags = await formapagModelo.findAll();
    console.log('Listando todos formapags >>>', {formapag})
    res.json({ formapag});
};

module.exports = {criar, alterar, excluir, detalhar, listar};