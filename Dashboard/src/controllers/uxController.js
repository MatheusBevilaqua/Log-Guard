var uxModel = require("../models/uxModel");

function inserir(req, res) {
    var funcionalidade = req.body.funcionalidade;
    var pagina = req.body.pagina;

    console.log("Dados recebidos:", req.body);

    if (pagina == undefined) {
        res.status(400).send("pagina está undefined!");
    } else if (funcionalidade == undefined) {
        res.status(400).send("funcionalidade está undefined!");
    } else {
        console.log("Chamando o modelo para inserir os dados.");
        uxModel.inserir(funcionalidade, pagina)
            .then((resultado) => {
                console.log("Inserção bem-sucedida:", resultado);
                res.status(201).json(resultado);
            })
            .catch((erro) => {
                console.log("Erro ao realizar a inserção:", erro);
                res.status(500).json({ message: "Erro interno do servidor", detalhes: erro });
            });
    }
}

function Funcionalidades(req, res) {

    uxModel.Funcionalidades().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function totais(req, res) {

    uxModel.totais().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function countFeedback(req, res) {

    uxModel.countFeedback().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    uxModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as mensagens: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    inserir,
    Funcionalidades,
    totais,
    countFeedback,
    listar
};
