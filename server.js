
const alunoModelo = require ('./model/aluno');
const veiculoModelo = require('./model/veiculo');
const caronaModelo = require('./model/carona');
const formapagModelo = require('./model/formapag');
const express = require ('express');
const database = require ('./db/database');


//Iniciando conexao com banco de dados 
try{
    const resultado = database.sync();
    console.log(resultado);
}catch(error){
    console.log(error);
}

//iniciando aplicação web para api

const app = express();
const porta = 3000;
app.listen(porta,() => {
  console.log(`servidor iniciando e ouvindo na porta ${porta}`)
});



//post criar para aluno
app.post('/cadastrar/criar', async (req, res) =>{
    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await alunoModelo.create({
            nome: 'Fernando',
            matricula: 163687,
            descricao: 'Sou aluno',
            foto: 'NA',
            datanascimento: '16/11/2001',
            email: 'fernando.cae30@gmail.com',
            turno: 'Matutino',
            turma: 'M5',
            curso: 'Informatica',
            sexo: 'Masculino',
            categoria: 'Aluno',
            telefone: '(27)99883-3082'
        });

        console.log(resultadoCreate);
        res.json(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
});

//post criar para veiculo
app.post('/inscrever/criar', async (req, res) =>{
    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await veiculoModelo.create({
            motorista: 'Franciely',
            tipo_veiculo: 'Carro',
            nr_cnh: '00235698',
            modelo_veiculo: 'Fuscão',
            placa_veiculo: 'ABC',
            cor_bimo: 'Preto',
            categoria_cnh: 'B'
        });

        console.log(resultadoCreate);
        res.json(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
});

//post criar para carona
app.post('/cadastrar/carona', async (req, res) =>{
    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await caronaModelo.create({
            partida_hora: '07:10',
            parada: 'Perim Mercado',
            hora: '00:00',
            data: '13/02',
            saldo: 'R$50,00',
            valorcorrida: 'R$5,00',
            extrato: '100,00'
        });


        console.log(resultadoCreate);
        res.json(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
});

//post forma de pagamento
app.post('/forma/pagar', async (req, res) =>{
    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await formapagModelo.create({
            transferencia: 'Pix',
        });

        console.log(resultadoCreate);
        res.json(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
});

app.get('/forma/pagar', async (req, res) => {
    try{
        const resultado = await database.sync();
        console.log(resultado);
        const formapag = await formapagModelo.findAll();
        console.log(formapag);
        res.json(formapag);
    }catch(error){
        console.log(error);
    }
});