// Importando dependencias internas
const alunoModelo = require('../model/aluno');

//controller para criar aluno 
const criar = async (req, res) => {
    // Obteno dados vindo do formulario ou via REST POST
    const {nome, matricula, descricao, foto, datanascimento, email, turno, turma, curso, sexo, categoria, telefone} = req.body;

    const resultadoCreate = await alunoModelo.create({
        nome,
        matricula,
        descricao,
        foto,
        datanascimento,
        email,
        turno,
        turma,
        curso,
        sexo,
        categoria,
        telefone
    });
    console.log('Criou aluno >>>', resultadoCreate);
    res.json({status: true});
};

//controller para alterar aluno
const alterar = async (req, res) => {
    //Obtendo dados vindos do formulario ou via REST POST
    const {nome, matricula, descricao, foto, datanascimento, email, turno, turma, curso, sexo, categoria, telefone} = req.body;


    //Buscar o aluno no banco para alteraçao
    const aluno = await aluno.findByPk(1);
    aluno.nome = nome;
    aluno.matricula = matricula;
    aluno.descricao = descricao;
    aluno.foto = foto;
    aluno.datanascimento = datanascimento;
    aluno.email = email;
    aluno.turno = turno;
    aluno.turma = turma;
    aluno.curso = curso;
    aluno.sexo = sexo;
    aluno.categoria = categoria;
    aluno.telefone = telefone;
    

    const resultadoCreate = await alunoModelo.create({
        nome,
        matricula,
        descricao,
        foto,
        datanascimento,
        email,
        turno,
        turma,
        curso,
        sexo,
        categoria,
        telefone
    })
    console.log('alterou aluno >>>', resultadoCreate);
    res.json({status: true});
};

//controler para excluir aluno
const excluir = async (req, res) => {
    //obtendo id para aluno ser buscado
    const {id} = req.params;

    //Buscar aluno para excluir
    const aluno = await alunoModelo.findByPk(1);
    aluno.destroy();
    console.log('Excluido aluno >>>', {id});
    res.json({aluno});
};

//controller para detalhar/buscar aluno
const detalhar = async (req, res) => {
    //Obtendo id para aluno ser buscado
    const {id} = req.params

    //buscar aluno no banco
    const aluno = await alunoModelo.findByPk(1);
    console.log('Obteve o aluno >>>', {id});
    res.json({ aluno });
};

//controle para listar aluno
const listar = async(req, res) =>{
    //listando todos alunos
    const alunos = await alunoModelo.findAll();
    console.log('Listando todos alunos >>>', {aluno})
    res.json({ aluno});
};

module.exports = {criar, alterar, excluir, detalhar, listar};