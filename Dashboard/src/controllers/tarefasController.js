var tarefasModel = require("../models/tarefasModel");

function contabilizaTarefas(req, res) {
  var qtdDesejavel = req.body.qtdTarefasDesejaveisServer;
  var qtdImportante = req.body.qtdTarefasImportantesServer;
  var qtdEssencial = req.body.qtdTarefasEssenciaisServer;
  var fkUsuarioTarefa = req.body.empresaUsuarioServer;


  if (qtdDesejavel == undefined) {
    res.status(400).send("qtdDesejavel está undefined!");
  } else if (qtdImportante == undefined) {
    res.status(400).send("qtdImportante está undefined!");
  } else if (qtdEssencial == undefined) {
    res.status(400).send("qtdEssencial está undefined!");
  } else if (fkUsuarioTarefa == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    tarefasModel.contabilizaTarefas(fkUsuarioTarefa,qtdDesejavel, qtdImportante,qtdEssencial)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  contabilizaTarefas
}