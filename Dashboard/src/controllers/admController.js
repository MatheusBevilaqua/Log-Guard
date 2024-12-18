var admModel = require("../models/admModel");

function getMaquinasDataRAM(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    admModel.getMaquinasDataRAM(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = {};
                }
                if (!maquinasMap[nomeMaquina][dataCaptura]) {
                    maquinasMap[nomeMaquina][dataCaptura] = { total: 0, count: 0 };
                }
                maquinasMap[nomeMaquina][dataCaptura].total += parseFloat(row.registro);
                maquinasMap[nomeMaquina][dataCaptura].count += 1;
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: Object.keys(maquinasMap[maquina]).map(data => ({
                    x: data,
                    y: parseFloat((maquinasMap[maquina][data].total / maquinasMap[maquina][data].count).toFixed(2))
                }))
            }));

            console.log('Dados processados para o gráfico RAM:', series);
            res.status(200).json(series);
        } else {
            console.log("Nenhum resultado encontrado!");
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}






function getMaquinasDataCPU(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    admModel.getMaquinasDataCPU(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = {};
                }
                if (!maquinasMap[nomeMaquina][dataCaptura]) {
                    maquinasMap[nomeMaquina][dataCaptura] = { total: 0, count: 0 };
                }
                maquinasMap[nomeMaquina][dataCaptura].total += parseFloat(row.registro);
                maquinasMap[nomeMaquina][dataCaptura].count += 1;
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: Object.keys(maquinasMap[maquina]).map(data => ({
                    x: data,
                    y: parseFloat((maquinasMap[maquina][data].total / maquinasMap[maquina][data].count).toFixed(2)) + '%'
                }))
            }));

            console.log('Dados processados para o gráfico CPU:', series);
            res.status(200).json(series);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function getMaquinasDataREDE(req, res) {
    var idEmpresaUsuario = req.body.idEmpresaUsuarioServer;

    admModel.getMaquinasDataREDE(idEmpresaUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            let maquinasMap = {};

            resultado.forEach(row => {
                let nomeMaquina = row.nomeMaquina;
                let dataCaptura = new Date(row.dtCriacaoCaptura).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

                if (!maquinasMap[nomeMaquina]) {
                    maquinasMap[nomeMaquina] = {};
                }
                if (!maquinasMap[nomeMaquina][dataCaptura]) {
                    maquinasMap[nomeMaquina][dataCaptura] = { total: 0, count: 0 };
                }
                maquinasMap[nomeMaquina][dataCaptura].total += parseFloat(row.registro);
                maquinasMap[nomeMaquina][dataCaptura].count += 1;
            });

            let series = Object.keys(maquinasMap).map(maquina => ({
                name: maquina,
                data: Object.keys(maquinasMap[maquina]).map(data => ({
                    x: data,
                    y: parseFloat((maquinasMap[maquina][data].total / maquinasMap[maquina][data].count).toFixed(2))
                }))
            }));

            console.log('Dados processados para o gráfico REDE:', series);
            res.status(200).json(series);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function getAlertaSemana(req, res) {
    const { idEmpresaUsuario } = req.body;
    console.log("Chamada para getAlertaSemana com idEmpresaUsuario:", idEmpresaUsuario);

    admModel.getAlertaSemana(idEmpresaUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                const dadosFormatados = resultado.map(dado => {
                    return {
                        ...dado,
                        Data: new Date(dado.Data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }) + ' ' + new Date(dado.Data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
                        Alerta: `${parseFloat(dado.Alerta).toFixed(0)}%`,
                        Parametro: `${parseFloat(dado.Parametro).toFixed(0)}%`
                    };
                });
                res.status(200).json(dadosFormatados);
            } else {
                res.status(404).send("Nenhum dado encontrado para alertas de máquinas na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar alertas das máquinas:", erro);
            res.status(500).json(erro);
        });
}

function getRiscoSemanal(req, res) {
    const idEmpresaUsuario = req.params.idEmpresaUsuario;
    console.log("Chamada para getRiscoSemanal com idEmpresaUsuario:", idEmpresaUsuario);

    admModel.getRiscoSemanal(idEmpresaUsuario)
        .then((resultado) => {
            if (resultado.length > 0) {
                let categorias = [];
                let dados = [];

                resultado.forEach(row => {
                    categorias.push(row.nomeMaquina);
                    dados.push(row.quantidade_alertas);
                });

                res.status(200).json({ categorias, dados });
            } else {
                res.status(404).send("Nenhum dado encontrado para máquinas em risco na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados de risco semanal:", erro);
            res.status(500).json(erro);
        });
}

function getAlertasPorDia(req, res) {
    console.log("Requisição recebida: /getAlertasPorDia");
    const idEmpresaUsuario = req.body.idEmpresaUsuarioServer;
    console.log("idEmpresaUsuarioServer:", idEmpresaUsuario);

    admModel.getAlertasPorDia(idEmpresaUsuario)
        .then((resultado) => {
            console.log("Resultado do banco de dados:", resultado);
            if (resultado.length > 0) {
                console.log("Enviando dados ao cliente.");
                res.status(200).json(resultado);
            } else {
                console.log("Nenhum dado encontrado para alertas diários.");
                res.status(200).json([]); // Retornar um array vazio
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar alertas diários:", erro);
            res.status(500).json({ error: "Erro ao buscar alertas diários." });
        });
}


function getProbabilidadeCPU(req, res) {
    console.log("Chamada para getProbabilidadeCPU");

    admModel.getProbabilidadeCPU()
        .then((resultado) => {
            if (resultado.length > 0) {
                const dadosFormatados = resultado.map(dado => {
                    return {
                        data: dado.data,
                        probabilidade: parseFloat(dado.probabilidade)
                    };
                });
                res.status(200).json(dadosFormatados);
            } else {
                res.status(404).send("Nenhum dado encontrado para probabilidade de uso da CPU na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados de probabilidade de uso da CPU:", erro);
            res.status(500).json(erro);
        });
}

function getProbabilidadeRAM(req, res) {
    console.log("Chamada para getProbabilidadeRAM");

    admModel.getProbabilidadeRAM()
        .then((resultado) => {
            if (resultado.length > 0) {
                const dadosFormatados = resultado.map(dado => {
                    return {
                        data: dado.data,
                        probabilidade: parseFloat(dado.probabilidade)
                    };
                });
                res.status(200).json(dadosFormatados);
            } else {
                res.status(404).send("Nenhum dado encontrado para probabilidade de uso de RAM na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados de probabilidade de uso da RAM:", erro);
            res.status(500).json(erro);
        });
}

function getProbabilidadeDISCO(req, res) {
    console.log("Chamada para getProbabilidadeDISCO");

    admModel.getProbabilidadeDISCO()
        .then((resultado) => {
            if (resultado.length > 0) {
                const dadosFormatados = resultado.map(dado => {
                    return {
                        data: dado.data,
                        probabilidade: parseFloat(dado.probabilidade)
                    };
                });
                res.status(200).json(dadosFormatados);
            } else {
                res.status(404).send("Nenhum dado encontrado para probabilidade de uso de DISCO na última semana.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar dados de probabilidade de uso de DISCO:", erro);
            res.status(500).json(erro);
        });
}

function getParametrosRiscoRAM(req, res) {
    admModel.getParametrosRiscoRAM()
        .then((resultado) => {
            if (resultado.length > 0) {
                const parametros = {
                    ram: resultado.find(param => param.fkrecurso === 2).parametro
                };
                res.status(200).json(parametros);
            } else {
                res.status(404).send("Nenhum parâmetro de risco encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar parâmetros de risco:", erro);
            res.status(500).json(erro);
        });
}

function getParametrosRiscoCPU(req, res) {
    admModel.getParametrosRiscoCPU()
        .then((resultado) => {
            if (resultado.length > 0) {
                const parametros = {
                    cpu: resultado.find(param => param.fkrecurso === 1).parametro
                };
                res.status(200).json(parametros);
            } else {
                res.status(404).send("Nenhum parâmetro de risco encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar parâmetros de risco:", erro);
            res.status(500).json(erro);
        });
}

function getParametrosRiscoREDE(req, res) {
    admModel.getParametrosRiscoREDE()
        .then((resultado) => {
            if (resultado.length > 0) {
                const parametros = {
                    rede: resultado.find(param => param.fkrecurso === 4).parametro
                };
                res.status(200).json(parametros);
            } else {
                res.status(404).send("Nenhum parâmetro de risco encontrado.");
            }
        })
        .catch((erro) => {
            console.error("Erro ao buscar parâmetros de risco:", erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    getParametrosRiscoREDE,
    getParametrosRiscoCPU,
    getParametrosRiscoRAM,
    getProbabilidadeDISCO,
    getProbabilidadeRAM,
    getProbabilidadeCPU,
    getAlertaSemana,
    getRiscoSemanal,
    getMaquinasDataRAM,
    getMaquinasDataCPU,
    getMaquinasDataREDE,
    getAlertasPorDia
}
