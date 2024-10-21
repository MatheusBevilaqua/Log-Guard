CREATE DATABASE logGuard;
USE logGuard;
CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY auto_increment,
nomeEmpresa VARCHAR(225),
emailInstitucional VARCHAR(225),
emailResponsavel VARCHAR(225),
cnpj CHAR(14),
cep CHAR(9)
);
CREATE VIEW visualizar_empresas AS SELECT * FROM empresa;
insert into empresa VALUES(default,'LOG GUARD', 'log.guard@sptech.school','log.guard@sptech.school','10101010101010','101010101');
select * from empresa;
INSERT INTO empresa (nomeEmpresa, emailInstitucional, emailResponsavel) 
VALUES 
('Empresa A', 'contato@empresaa.com', 'responsavelA@empresaa.com'),
('Empresa B', 'contato@empresab.com', 'responsavelB@empresab.com'),
('Empresa C', 'contato@empresac.com', 'responsavelC@empresac.com');
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

-- Inserindo 10 funcionários para Empresa A
INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(1, 'Funcionario 1A', 'funcionario1a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 2A', 'funcionario2a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 3A', 'funcionario3a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 4A', 'funcionario4a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 5A', 'funcionario5a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 6A', 'funcionario6a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 7A', 'funcionario7a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 8A', 'funcionario8a@empresaa.com', 'senha123', 'COMUM'),
(1, 'Funcionario 9A', 'funcionario9a@empresaa.com', 'senha123senha123', 'ADMINISTRADOR'),
(1, 'Funcionario 10A', 'funcionario10a@empresaa.com', 'senha123', 'COMUM');

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
-- Inserindo 10 funcionários para Empresa B
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

-- Inserindo 10 funcionários para Empresa C
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
select * from usuario;

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


insert into maquina (MACAdress) values ('00:e2:69:6b:fc:0f');
CREATE TABLE relatorio(
idRelatorio INT auto_increment,
fkMaquinaRelatorio INT,
FOREIGN KEY (fkMaquinaRelatorio) REFERENCES maquina(idMaquina),
fkUsuarioRelatorio INT,
FOREIGN KEY (fkUsuarioRelatorio) REFERENCES usuario(idUsuario),
PRIMARY KEY (idRelatorio,fkMaquinaRelatorio,fkUsuarioRelatorio),
titulo VARCHAR(255),
texto BLOB,
dtCriacaoRelatorio DATETIME,
statusMaquina VARCHAR(10),
CONSTRAINT CHK_STATUS CHECK (statusMaquina ='EMERGÊNCIA' OR statusMaquina ='ALERTA' OR statusMaquina ='NORMAL')
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
-- METRICAS BASEADAS EM PESQUISA (SOMENTE PARA DEMONSTRAÇÃO NA SPRINT 2)
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
dtCriacaoCaptura DATETIME
);

-- Adicionar coluna tem_problema boolean aqui
select * from captura;