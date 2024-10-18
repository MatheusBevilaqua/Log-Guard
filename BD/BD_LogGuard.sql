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

select * from empresa;
CREATE VIEW visualizar_empresas AS SELECT * FROM empresa;


insert into empresa VALUES(default,'LOG GUARD', 'log.guard@sptech.school','log.guard@sptech.school','10101010101010','101010101');


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
CONSTRAINT CHK_TIPO CHECK (tipoPerfilUsuario ='ADMINISTRADOR' OR tipoPerfilUsuario ='LOG_GUARD' OR tipoPerfilUsuario ='COMUM')
);
SELECT * FROM usuario;


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

-- Inserindo 10 funcionários para Empresa B
INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(2, 'Funcionario 1B', 'funcionario1b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 2B', 'funcionario2b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 3B', 'funcionario3b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 4B', 'funcionario4b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 5B', 'funcionario5b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 6B', 'funcionario6b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 7B', 'funcionario7b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 8B', 'funcionario8b@empresab.com', 'senha123', 'COMUM'),
(2, 'Funcionario 9B', 'funcionario9b@empresab.com', 'senha123', 'ADMINISTRADOR'),
(2, 'Funcionario 10B', 'funcionario10b@empresab.com', 'senha123', 'COMUM');

-- Inserindo 10 funcionários para Empresa C
INSERT INTO usuario (fkEmpresaUsuario, nomeUsuario, emailUsuario, senhaUsuario, tipoPerfilUsuario) 
VALUES 
(3, 'Funcionario 1C', 'funcionario1c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 2C', 'funcionario2c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 3C', 'funcionario3c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 4C', 'funcionario4c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 5C', 'funcionario5c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 6C', 'funcionario6c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 7C', 'funcionario7c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 8C', 'funcionario8c@empresac.com', 'senha123', 'COMUM'),
(3, 'Funcionario 9C', 'funcionario9c@empresac.com', 'senha123', 'ADMINISTRADOR'),
(3, 'Funcionario 10C', 'funcionario10c@empresac.com', 'senha123', 'COMUM');



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
latencia INT,
MACAdress VARCHAR(45)
); 

select * from maquina;

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

CREATE TABLE maquinaRecurso(
idMaquinaRecurso INT PRIMARY KEY auto_increment,
fkMaquinaRecurso INT,
FOREIGN KEY (fkMaquinaRecurso) REFERENCES maquina(idMaquina),
fkrecurso INT,
FOREIGN KEY (fkrecurso) REFERENCES recurso(idRecurso),
max DECIMAL (8,5)
);

CREATE TABLE captura(
idCaptura INT PRIMARY KEY auto_increment,
fkMaquinaCaptura INT,
FOREIGN KEY (fkMaquinaCaptura) REFERENCES maquina(idMaquina),
fkRecursoCaptura INT,
FOREIGN KEY (fkRecursoCaptura) REFERENCES recurso(idRecurso),
fkMaquinaRecursoCaptura INT,
FOREIGN KEY (fkMaquinaRecursoCaptura) REFERENCES maquinaRecurso(idMaquinaRecurso),
registro DECIMAL (8,3),
dtCriacaoCaptura DATETIME
);

