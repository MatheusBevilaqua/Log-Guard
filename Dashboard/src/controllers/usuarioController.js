var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var emaiUsuario = req.body.emailServer;
    var senhaUsuario = req.body.senhaServer;

    if (emaiUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(emaiUsuario, senhaUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        usuarioModel.autenticar(emaiUsuario, senhaUsuario)
                            .then((resultadoAutenticar) => {
                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        emailUsuario: resultadoAutenticar[0].emailUsuario,
                                        fkEmpresaUsuario: resultadoAutenticar[0].empresaId,
                                        nomeUsuario: resultadoAutenticar[0].nomeUsuario,
                                        idUsuario: resultadoAutenticar[0].idUsuario,
                                        tipoPerfilUsuario: resultadoAutenticar[0].tipoPerfilUsuario,
                                        senhaUsuario: resultadoAutenticar[0].senhaUsuario                                    
                                    });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeUsuario = req.body.nomeUsuarioServer;
    var emailUsuario = req.body.emailUsuarioServer;
    var senhaUsuario = req.body.senhaUsuarioServer;
    var fkEmpresaUsuario = req.body.empresaUsuarioServer;
    var tipoPerfilUsuario = req.body.tipoUsuariosServer;

    // Faça as validações dos valores
    if (nomeUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (emailUsuario == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaUsuario == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (fkEmpresaUsuario == undefined) {
        res.status(400).send("Sua empresa a vincular está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nomeUsuario, emailUsuario, senhaUsuario, fkEmpresaUsuario,tipoPerfilUsuario)
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

module.exports = {
    autenticar,
    cadastrar
}