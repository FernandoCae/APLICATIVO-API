const indexController = {
    acaoListar: (req,res)=>{  
        res.send(`sou  o index para listar...`)             //req.param possui os parâmetros da requisição
    },

    acaoCadastrar: (req,res)=>{  
        res.send(`sou  o cadastro...`)                      //req.param possui os parâmetros da requisição
    },

    acaoDeletar: (req,res)=>{  
        
        res.send(`Vou Atualizar com id=${id}`)              //req.param possui os parâmetros da requisição
    },

    acaoAtualizar: (req,res)=>{  
        const id = req.param.id;res.send(`Vou Atualizar com id=${id}`)              //req.param possui os parâmetros da requisição
    },

    acaoDetalhar: (req,res)=>{  
        const id = req.params.id;
        res.send(`Vou Detalhar com id ${id}`);              //req.param possui os parâmetros da requisição
    },
}



module.exports = indexController;