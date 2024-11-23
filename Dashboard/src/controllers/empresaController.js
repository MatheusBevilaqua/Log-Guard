var empresaModel = require("../models/empresaModel");

function buscarPorCnpj(req, res) {
  var cnpj = req.query.cnpj;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    res.status(200).json(resultado);
  });
}

// ARRUMAR O LISTAR------------------------------------
function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorId(req, res) {
  var id = req.params.id;

  empresaModel.buscarPorId(id).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer; 
  var EmailInstitucional = req.body.emailInstServer;
  var emailResponsavel = req.body.emailRespServer;
  var cnpj = req.body.cnpjServer;
  var cep = req.body.cepServer;

  empresaModel.buscarPorCnpj(cnpj).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `A empresa com o cnpj ${cnpj} já existe` });
    } else {
      empresaModel.cadastrar(nome, EmailInstitucional, emailResponsavel, cnpj, cep).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}
//Gerenciamento de máquinas
// function confirmar_editar(req, res){

// }
// function excluir_editar(req, res){

// }
function confirmar_cadastrar(req, res){
var fkEmpresaMaquina = req.body.fkEmpresaMaquinaServer;
var nomeMaquina = req.body.nomeMaquinaServer;
var modeloCPU = req.body.modeloCServer;
var capacidadeRAM =req.body.capacidadeServer;
var disco = req.body.discoServer;
var localidade= req.body.localidadeServer;
var MACAdress = req.body.MACAdressServer;

 empresaModel.confirmar_cadastrar(fkEmpresaMaquina,nomeMaquina,modeloCPU,capacidadeRAM,disco,localidade,MACAdress).then((resultado) => {
  if (resultado.length > 0) {
    res
      .status(401)
      .json({ mensagem: `a empresa com o cnpj ${cnpj} já existe` });
  } else {
    empresaModel.cadastrar(fkEmpresaMaquina,nomeMaquina, nomeMaquina,modeloCPU,capacidadeRAM,disco,localidade,MACAdress).then((resultado) => {
      res.status(201).json(resultado);
    });
  }
});
}

function visualizarEmpresas(req, res) {
  empresaModel.visualizarEmpresas().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });

}

function visualizarMaquinas(req, res) {

  var instrucaoSql = req.body.instrucaoServer;

  empresaModel.visualizarMaquinas(instrucaoSql).then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });

}
function deletarMaquina(req, res) {
  var idMaquina = req.body.idMaquinaServer;
  empresaModel.deletarMaquina(idMaquina).then(function (resultado) {
      if (resultado.affectedRows > 0) {
          res.status(200).json({ mensagem: "Máquina deletada com sucesso" });
      } else {
          res.status(404).send("Nenhuma máquina encontrada");
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao deletar o usuário: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

function exibirDadosEdicaoMaquina(req, res) {
  var idMaquina = req.body.idMaquinaServer;
  empresaModel.exibirDadosEdicaoMaquina(idMaquina).then(function (resultado) {
      if (resultado.length > 0) {
          res.json({
              nomeMaquina: resultado[0].nomeMaquina,
              modeloCPU: resultado[0].modeloCPU,
              capacidadeRAM: resultado[0].capacidadeRAM,
              disco: resultado[0].disco,
              localidade: resultado[0].localidade,
          });
      } else {
          res.status(204).send("Nenhum resultado encontrado!");
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}
function editarMaquina(req, res) {

  var idMaquina = req.body.idMaquinaServer;
  var nomeMaquina = req.body.nomeMaquinaServer;
  var modeloCPU = req.body.modeloCPUServer;
  var capacidadeRAM =req.body.capacidadeRAMServer;
  var disco = req.body.discoServer;
  var localidade= req.body.localidadeServer;

  

  empresaModel.editarMaquina(idMaquina,nomeMaquina,modeloCPU,capacidadeRAM,disco,localidade).then(function (resultado) {
      if (resultado.affectedRows > 0) {
          res.status(200).json({ mensagem: "Máquina atualizado com sucesso" });
      } else {
          res.status(404).send("Nenhuma máquina encontrada");
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao atualizar a máquina: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarPorCnpj,
  buscarPorId,
  cadastrar,
  listar,
  confirmar_cadastrar,
  visualizarEmpresas,
  visualizarMaquinas,
  deletarMaquina,
  exibirDadosEdicaoMaquina,
  editarMaquina
  // confirmar_editar,
  // excluir_editar
};
