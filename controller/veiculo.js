// Importando dependencias internas
const veiculoModelo = require('../model/veiculo');

//controller para criar veiculo 
const criar = async (req, res) => {
    // Obtendo dados vindo do formulario ou via REST POST
    const {motorista, nr_cnh, tipo_veiculo, modelo_veiculo, placa_veiculo, cor_bimo, categoria_cnh} = req.body;

    const resultadoCreate = await veiculoModelo.create({
        motorista,
        nr_cnh,
        tipo_veiculo,
        modelo_veiculo,
        placa_veiculo,
        cor_bimo,
        categoria_cnh
    });
    console.log('Criou veiculo >>>', resultadoCreate);
    res.json({status: true});
};

//controller para alterar veiculo
const alterar = async (req, res) => {
    //Obtendo dados vindos do formulario ou via REST POST
    const {motorista, nr_cnh, tipo_veiculo, cor_bimo, modelo_veiculo, placa_veiculo, categoria_cnh} = req.body;

    //Buscar o veiculo no banco para alteraçao
    const veiculo = await veiculo.findByPk(1);
    veiculo.motorista = motorista;
    veiculo.nr_cnh = nr_cnh;
    veiculo.tipo_veiculo = tipo_veiculo;
    veiculo.modelo_veiculo = modelo_veiculo;
    veiculo.placa_veiculo = placa_veiculo;
    veiculo.categoria_cnh = categoria_cnh;
    veiculo.cor_bimo = cor_bimo;
    

    const resultadoCreate = await veiculoModelo.create({
        motorista,
        nr_cnh,
        tipo_veiculo,
        modelo_veiculo,
        placa_veiculo,
        cor_bimo,
        categoria_cnh
    })
    console.log('alterou veiculo >>>', resultadoCreate);
    res.json({status: true});
};

//controler para excluir veiculo
const excluir = async (req, res) => {
    //obtendo id para veiculo ser buscado
    const {id} = req.params;

    //Buscar veiculo para excluir
    const veiculo = await veiculoModelo.findByPk(1);
    veiculo.destroy();
    console.log('Excluido veiculo >>>', {id});
    res.json({veiculo});
};

//controller para detalhar/buscar veiculo
const detalhar = async (req, res) => {

    //Obtendo id para veiculo ser buscado
    const {id} = req.params

    //buscar veiculo no banco
    const veiculo = await veiculoModelo.findByPk(1);
    console.log('Obteve o veiculo >>>', {id});
    res.json({ veiculo });
};

//controle para listar veiculo
const listar = async(req, res) =>{
    //listando todos veiculo
    const veiculo = await veiculoModelo.findAll();
    console.log('Listando todos veiculo >>>', {veiculo})
    res.json({veiculo});
};

module.exports = {criar, alterar, excluir, detalhar, listar};