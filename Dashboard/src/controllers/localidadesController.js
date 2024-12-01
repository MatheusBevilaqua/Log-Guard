var localidadesModel = require("../models/localidadesModel");

function visualizarLocalidades(req, res) {

  var fkEmpresa = req.body.idEmpresaUsuarioServer;

  localidadesModel.visualizarLocalidades(fkEmpresa).then(function (resultado) {
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

function exibirDadosEdicaoLocalidade(req, res) {
  var idLocalidade = req.body.idLocalidadeServer;
  localidadesModel.exibirDadosEdicaoLocalidade(idLocalidade).then(function (resultado) {
      if (resultado.length > 0) {
          res.json({
            nomeLocalidade: resultado[0].nomeLocalidade,
            CEP_localidade: resultado[0].CEP_localidade,
            rua_localidade: resultado[0].rua_localidade,
            parametro_taxa_uso_bl: resultado[0].parametro_taxa_uso_bl,
            parametro_perda_pacotes: resultado[0].parametro_perda_pacotes
      
          });
      } else {
          res.status(204).send("Nenhum resultado encontrado!");
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

function cadastrarLocalidade(req, res){
  var nomeLocalidade = req.body.nomeLocalidadeServer;
  var CEPLocalidade = req.body.CEPLocalidadeServer;
  var rua = req.body.ruaServer;
  var bandaLarga = req.body.bandaLargaServer;
  var parametroPacotes = req.body.parametroPacotesServer;
  var fkEmpresaLocalidade = req.body.fkEmpresaLocalidadeServer;
  
  if (nomeLocalidade == undefined) {
    res.status(400).send("Seu nomeLocalidade está undefined!");
} else if (CEPLocalidade == undefined) {
    res.status(400).send("Seu CEPLocalidade está undefined!");
} else if (rua == undefined) {
    res.status(400).send("Sua rua está undefined!");
} else if (bandaLarga == undefined) {
    res.status(400).send("Sua bandaLarga a vincular está undefined!");
} else if (parametroPacotes == undefined) {
  res.status(400).send("Sua parametroPacotes a vincular está undefined!");
} else if (fkEmpresaLocalidade == undefined) { 
    res.status(400).send("Sua fkEmpresaLocalidade a vincular está undefined!");
  }
     else {

      localidadesModel.cadastrarLocalidade(fkEmpresaLocalidade,nomeLocalidade,CEPLocalidade,rua,bandaLarga,parametroPacotes)
      .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
   
    }

    function editarLocalidades(req, res) {

      var idLocalidade = req.body.idLocalidadeServer;
      var nomeLocalidade = req.body.nomeLocalidadeServer;
      var CEP = req.body.CEPServer;
      var rua =req.body.ruaServer;
      var banda = req.body.bandaServer;
      var Pacotes = req.body.PacotesServer;
    
      localidadesModel.editarLocalidades(idLocalidade,nomeLocalidade,CEP,rua,banda,Pacotes).then(function (resultado) {
          if (resultado.affectedRows > 0) {
              res.status(200).json({ mensagem: "Máquina Localidade com sucesso" });
          } else {
              res.status(404).send("Nenhuma Localidade encontrada");
          }
      }).catch(function (erro) {
          console.log("Houve um erro ao atualizar a máquina: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
    }

    function deletarLocalidade(req, res) {
      var idLocalidade = req.body.id_localidadeServer;
      localidadesModel.deletarLocalidade(idLocalidade).then(function (resultado) {
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
    


  

module.exports = {
  visualizarLocalidades,
  exibirDadosEdicaoLocalidade,
  cadastrarLocalidade,
  editarLocalidades,
  deletarLocalidade
}