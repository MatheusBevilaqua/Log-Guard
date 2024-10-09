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

insert into empresa VALUES(default,'LOG GUARD', 'log.guard@sptech.school','log.guard@sptech.school','10101010101010','101010101');

select * from empresa;

INSERT INTO empresa  VALUES(
default, nomeEmpresa, EmailInstitucional,emailResponsavel, cnpj, cep 
);


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
INSERT INTO usuario VALUES(default, 5,'Ademir', 'ademir@logguard.com', 'Admin123','LOG_GUARD');



select * from usuario;

CREATE TABLE maquina(
idMaquina INT PRIMARY KEY auto_increment,
fkEmpresaMaquina INT,
FOREIGN KEY maquina(fkEmpresaMaquina) REFERENCES empresa(idEmpresa),
nomeMaquina VARCHAR(255),
modeloCPU VARCHAR(45),
qtdNucleos INT,
capacidadeRAM DECIMAL(8,3),
MACAdress VARCHAR(45),
numeroSerial VARCHAR(255) UNIQUE,
latencia INT
);

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

CREATE TABLE tipoArmazenamento(
idtipoArmazenamento INT PRIMARY KEY auto_increment,
tipoArmazenamento VARCHAR(45)
);

CREATE TABLE maquinaArmazenamento(
idMaquinaArmazenamento INT PRIMARY KEY auto_increment,
fkMaquinaArmazenamento INT,
FOREIGN KEY (fkMaquinaArmazenamento) REFERENCES maquina(idMaquina),
fkTipoArmazenamento INT,
FOREIGN KEY (fkTipoArmazenamento) REFERENCES tipoArmazenamento(idtipoArmazenamento),
capacidade DECIMAL (8,5)
);



