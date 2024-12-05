const operacaoModel = require("../models/operacaoModel");

function visualizarFuncionarios(req, res) {
  const fkEmpresa = req.body.idEmpresaUsuarioServer;

  operacaoModel
    .visualizarFuncionarios(fkEmpresa)
    .then((resultado) => {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum funcionário encontrado.");
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar funcionários:", erro);
      res.status(500).json({ mensagem: "Erro ao buscar funcionários.", erro });
    });
}

function melhorDesempenho(req, res) {
  const idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

  operacaoModel
    .melhorDesempenho(idEmpresaUsuario)
    .then((resultado) => {
      if (resultado) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send("Nenhum dado encontrado.");
      }
    })
    .catch((erro) => {
      console.error("Erro ao buscar melhor desempenho:", erro);
      res.status(500).json({ mensagem: "Erro ao buscar melhor desempenho.", erro });
    });
}


function verRelatorio(req, res) {
  const fkEmpresa = req.query.idEmpresaUsuarioServer; // Acessa a query string

  if (!fkEmpresa) {
      res.status(400).json({ mensagem: "fkEmpresa não foi fornecido." });
      return;
  }

  operacaoModel
      .verRelatorio(fkEmpresa)
      .then((resultado) => {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum dado encontrado.");
          }
      })
      .catch((erro) => {
          console.error("Erro ao buscar dados:", erro);
          res.status(500).json({ mensagem: "Erro ao buscar dados.", erro });
      });
}




module.exports = {
  visualizarFuncionarios,
  melhorDesempenho,
  verRelatorio
};
