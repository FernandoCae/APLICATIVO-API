// Importando dependencias internas
const caronaModelo = require('../model/carona');

//controller para criar carona 
const criar = async (req, res) => {
    // Obteno dados vindo do formulario ou via REST POST
    const {partida_hora, parada, hora, data, valorcorrida, saldo, extrato} = req.body;

    const resultadoCreate = await caronaModelo.create({
        partida_hora,
        parada,
        hora,
        data,
        saldo,
        valorcorrida,
        extrato
    });
    console.log('Criou carona >>>', resultadoCreate);
    res.json({status: true});
};

//controller para alterar carona
const alterar = async (req, res) => {
    //Obtendo dados vindos do formulario ou via REST POST
    const {partida_hora, parada, hora, data, valorcorrida, saldo, extrato} = req.body;


    //Buscar o carona no banco para alteraçao
    const carona = await carona.findByPk(1);
    //hora que a partida começar
    carona.partida_hora = partida_hora;
    //hora em que o homezinho chegou ao seu destino
    carona.parada = parada;
    //hora em que foi lançada a corrida
    carona.hora = hora;
    //data em que a corrida vai ser lançada
    carona.data = data;
    carona.valorcorrida = valorcorrida;
    //precisamos de uma forma de descobrir o saldo e tirar o saldo
    carona.saldo = saldo;
    carona.extrato = extrato;
    
    const resultadoCreate = await caronaModelo.create({
        
    })
    console.log('alterou carona >>>', resultadoCreate);
    res.json({status: true});
};

//controler para excluir carona
const excluir = async (req, res) => {
    //obtendo id para carona ser buscado
    const {id} = req.params;

    //Buscar carona para excluir
    const carona = await caronaModelo.findByPk(1);
    carona.destroy();
    console.log('Excluido carona >>>', {id});
    res.json({carona});
};

//controller para detalhar/buscar carona
const detalhar = async (req, res) => {
    //Obtendo id para carona ser buscado
    const {id} = req.params

    //buscar carona no banco
    const carona = await caronaModelo.findByPk(1);
    console.log('Obteve o carona >>>', {id});
    res.json({ carona });
};

//controle para listar carona
const listar = async(req, res) =>{
    //listando todos carona
    const carona = await caronaModelo.findAll();
    console.log('Listando todos carona >>>', {carona})
    res.json({ carona});
};

module.exports = {criar, alterar, excluir, detalhar, listar};