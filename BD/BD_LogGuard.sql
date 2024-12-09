DROP DATABASE logGuard;
CREATE DATABASE logGuard;
USE logGuard;

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY auto_increment,
nomeEmpresa VARCHAR(225),
emailInstitucional VARCHAR(225),
emailResponsavel VARCHAR(225),
cnpj CHAR(18),
cep CHAR(9),
statusEmpresa varchar(7),
paramCPU DOUBLE,
paramMEM DOUBLE,
paramHD DOUBLE,
paramBL DOUBLE,
dtCadastroEmpresa DATE
);

CREATE VIEW visualizar_empresas AS SELECT * FROM empresa;

insert into empresa VALUES(default,'LOG GUARD', 'log.guard@sptech.school','log.guard@sptech.school','10101010101010','101010101','ATIVO',65.0, 75.0,80.0,100.0);
insert into empresa VALUES(default, 'Empresa A', 'contato@empresaa.com', 'responsavelA@empresaa.com','10101010101010','101010101','INATIVO',65.0, 75.0,80.0,100.0);
insert into empresa VALUES(default,'Empresa B', 'contato@empresab.com', 'responsavelB@empresab.com','10101010101010','101010101','ATIVO',75.0, 85.0,90.0,200.0);
insert into empresa VALUES(default,'Empresa C', 'contato@empresac.com', 'responsavelC@empresac.com','10101010101010','101010101','ATIVO',75.0, 85.0,90.0,200.0);

CREATE TABLE usuario(
idUsuario INT PRIMARY KEY auto_increment,
fkEmpresaUsuario INT,
FOREIGN KEY usuario(fkEmpresaUsuario) REFERENCES empresa(idEmpresa),
nomeUsuario VARCHAR(225),
emailUsuario VARCHAR(225),
senhaUsuario VARCHAR(225),
tipoPerfilUsuario VARCHAR(13),
CONSTRAINT CHK_TIPO CHECK (tipoPerfilUsuario ='ADMINISTRADOR' OR tipoPerfilUsuario ='LOG_GUARD' OR tipoPerfilUsuario ='COMUM' OR tipoPerfilUsuario = 'DESATIVADO')
);

INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(1, 'jhonatan', 'jhonatan@gmail.com', 'senha123', 'LOG_GUARD'),
(1, 'carol', 'carol@gmail.com', 'senha123', 'LOG_GUARD'),
(1, 'bruno', 'bruno@gmail.com', 'senha123', 'LOG_GUARD'),
(1, 'matheus', 'matheus@gmail.com', 'senha123', 'LOG_GUARD'),
(1, 'fabricio', 'fabricio@gmail.com', 'senha123', 'LOG_GUARD'),
(1, 'rodrigo', 'rodrigo@gmail.com', 'senha123', 'LOG_GUARD');

INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(2, 'Funcionario 1A', 'funcionario1a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 2A', 'funcionario2a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 3A', 'funcionario3a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 4A', 'funcionario4a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 5A', 'funcionario5a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 6A', 'funcionario6a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 7A', 'funcionario7a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 8A', 'funcionario8a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 9A', 'funcionario9a@empresaa.com', 'senha123senha123', 'ADMINISTRADOR'),
(2, 'Funcionario 10A', 'funcionario10a@empresaa.com', 'senha123', 'COMUM');

INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(2, 'Funcionario 11A', 'funcionario11a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 12A', 'funcionario12a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 13A', 'funcionario13a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 14A', 'funcionario14a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 15A', 'funcionario15a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 16A', 'funcionario16a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 17A', 'funcionario17a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 18A', 'funcionario18a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 19A', 'funcionario19a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 20A', 'funcionario20a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 21A', 'funcionario21a@empresaa.com', 'senha123', 'ADMINISTRADOR'),
(2, 'Funcionario 22A', 'funcionario22a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 23A', 'funcionario23a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 24A', 'funcionario24a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 25A', 'funcionario25a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 26A', 'funcionario26a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 27A', 'funcionario27a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 28A', 'funcionario28a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 29A', 'funcionario29a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 30A', 'funcionario30a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 31A', 'funcionario31a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 32A', 'funcionario32a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 33A', 'funcionario33a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 34A', 'funcionario34a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 35A', 'funcionario35a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 36A', 'funcionario36a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 37A', 'funcionario37a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 38A', 'funcionario38a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 39A', 'funcionario39a@empresaa.com', 'senha123', 'COMUM'),
(2, 'Funcionario 40A', 'funcionario40a@empresaa.com', 'senha123', 'COMUM');


INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(3, 'Funcionario 1B', 'funcionario1b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 2B', 'funcionario2b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 3B', 'funcionario3b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 4B', 'funcionario4b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 5B', 'funcionario5b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 6B', 'funcionario6b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 7B', 'funcionario7b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 8B', 'funcionario8b@empresab.com', 'senha123', 'COMUM'),
(3, 'Funcionario 9B', 'funcionario9b@empresab.com', 'senha123', 'ADMINISTRADOR'),
(3, 'Funcionario 10B', 'funcionario10b@empresab.com', 'senha123', 'COMUM');


INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(4, 'Funcionario 1C', 'funcionario1c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 2C', 'funcionario2c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 3C', 'funcionario3c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 4C', 'funcionario4c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 5C', 'funcionario5c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 6C', 'funcionario6c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 7C', 'funcionario7c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 8C', 'funcionario8c@empresac.com', 'senha123', 'COMUM'),
(4, 'Funcionario 9C', 'funcionario9c@empresac.com', 'senha123', 'ADMINISTRADOR'),
(4, 'Funcionario 10C', 'funcionario10c@empresac.com', 'senha123', 'COMUM');

CREATE TABLE maquina(
idMaquina INT PRIMARY KEY auto_increment,
fkEmpresaMaquina INT,
FOREIGN KEY (fkEmpresaMaquina) REFERENCES empresa(idEmpresa),
fkUsuarioMaquina INT,
FOREIGN KEY (fkUsuarioMaquina) REFERENCES usuario(idUsuario),
nomeMaquina VARCHAR(255),
modeloCPU VARCHAR(45),
capacidadeRAM DECIMAL(8,3),
disco INT,
localidade VARCHAR(45),
MACAdress VARCHAR(45)
); 

CREATE TABLE atribuicaoMaquina(
idMaquinaUsuario INT auto_increment,
fkUsuarioAtribuicao INT,
FOREIGN KEY (fkUsuarioAtribuicao) REFERENCES usuario(idUsuario),
fkMaquinAtribuicao INT,
FOREIGN KEY (fkMaquinAtribuicao) REFERENCES maquina(idMaquina),
primary key(idMaquinaUsuario,fkUsuarioAtribuicao,fkMaquinAtribuicao)
);


INSERT INTO maquina (fkEmpresaMaquina, fkUsuarioMaquina, nomeMaquina, modeloCPU, capacidadeRAM, disco, localidade, MACAdress) VALUES
(3, 47, 'Servidor Central', 'Intel Xeon E5', 64.000, 2000, 'Data Center', '00:1A:2B:3C:4D:5E'),
(3, 48, 'Estação Trabalho 01', 'Intel i7 8700', 16.000, 500, 'Escritório 1', '00:1A:2B:3C:4D:5F'),
(3, 49, 'Estação Trabalho 02', 'AMD Ryzen 5 3600', 16.000, 500, 'Escritório 1', '00:1A:2B:3C:4D:60'),
(3, 50, 'Servidor Backup', 'Intel Xeon E5', 32.000, 1000, 'Data Center', '00:1A:2B:3C:4D:61'),
(3, 51, 'Estação Design', 'Intel i9 9900K', 32.000, 1000, 'Escritório 2', '00:1A:2B:3C:4D:62'),
(3, 52, 'Estação Marketing', 'AMD Ryzen 7 3700X', 16.000, 512, 'Escritório 3', '00:1A:2B:3C:4D:63'),
(3, 53, 'Estação Vendas', 'Intel i5 10400', 8.000, 256, 'Escritório 4', '00:1A:2B:3C:4D:64'),
(3, 54, 'Estação Financeiro', 'Intel i5 9400', 8.000, 256, 'Escritório 5', '00:1A:2B:3C:4D:65'),
(3, 55, 'Estação RH', 'AMD Ryzen 3 3200G', 8.000, 256, 'Escritório 6', '00:1A:2B:3C:4D:66'),
(3, 56, 'Notebook Executivo', 'Intel i7 1065G7', 16.000, 512, 'Sede', '00:1A:2B:3C:4D:67');


CREATE TABLE relatorio(
idRelatorio INT PRIMARY KEY auto_increment,
fkEmpresaRelatorio INT,
FOREIGN KEY relatorio(fkEmpresaRelatorio) REFERENCES empresa(idEmpresa),
fkUsuarioRelatorio INT,
FOREIGN KEY (fkUsuarioRelatorio) REFERENCES usuario(idUsuario),
titulo VARCHAR(255),
texto VARCHAR(255),
dtCriacaoRelatorio DATETIME default current_timestamp,
statusRelatorio VARCHAR(10),
CONSTRAINT CHK_STATUS CHECK (statusRelatorio ='EMERGÊNCIA' OR statusRelatorio ='ALERTA' OR statusRelatorio ='NORMAL')
);

CREATE TABLE feedback(
idFeedback INT PRIMARY KEY auto_increment,
fkEmpresaFeedback INT,
FOREIGN KEY Feedback(fkEmpresaFeedback) REFERENCES empresa(idEmpresa),
fkUsuarioFeedback INT,
FOREIGN KEY (fkUsuarioFeedback) REFERENCES usuario(idUsuario),
titulo VARCHAR(255),
texto VARCHAR(255),
dtCriacaoFeedback DATETIME default current_timestamp,
statusFeedback VARCHAR(50)
);

CREATE TABLE recurso(
idRecurso INT PRIMARY KEY auto_increment,
nomeRecurso VARCHAR(45)
);
INSERT INTO recurso VALUES(default, 'Uso de CPU');
INSERT INTO recurso VALUES(default, 'Uso de RAM');
INSERT INTO recurso VALUES(default, 'Uso de Disco');
INSERT INTO recurso VALUES(default, 'Taxa de uso da largura de banda');

CREATE TABLE maquinaRecurso(
idMaquinaRecurso INT PRIMARY KEY auto_increment,
fkrecurso INT,
FOREIGN KEY (fkrecurso) REFERENCES recurso(idRecurso),
parametro DECIMAL (8,5)
);


INSERT INTO maquinaRecurso VALUES(default, 1, 65.0);
INSERT INTO maquinaRecurso VALUES(default, 2, 70.0);
INSERT INTO maquinaRecurso VALUES(default, 3, 80.0);
INSERT INTO maquinaRecurso VALUES(default, 4, 100.0);


-- MUDAR ISSO PARA TERCEIRA SPRINT, TANTO A TABELA maquinaRecurso quanto a tabela captura pedem fk da máquina. o que acontece se eles forem diferentes?????
CREATE TABLE captura(
idCaptura INT PRIMARY KEY auto_increment,
fkMaquinaCaptura INT,
FOREIGN KEY (fkMaquinaCaptura) REFERENCES maquina(idMaquina),
fkRecursoCaptura INT,
FOREIGN KEY (fkRecursoCaptura) REFERENCES recurso(idRecurso),
fkMaquinaRecursoCaptura INT,
FOREIGN KEY (fkMaquinaRecursoCaptura) REFERENCES maquinaRecurso(idMaquinaRecurso),
registro DECIMAL (6,3),
tem_problema boolean,
dtCriacaoCaptura DATETIME
);

create table Log (
idLog INT primary key auto_increment,
funcionalidade varchar(50),
pagina varchar(50)
);