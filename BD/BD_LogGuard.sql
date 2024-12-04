CREATE DATABASE logGuard;
USE logGuard;

CREATE TABLE expediente(
idExpediente INT PRIMARY KEY AUTO_INCREMENT,
duracaoExpediente TIME, 
dataExpediente DATE
);

CREATE TABLE empresa(
idEmpresa INT PRIMARY KEY auto_increment,
nomeEmpresa VARCHAR(225),
emailInstitucional VARCHAR(225),
emailResponsavel VARCHAR(225),
cnpj CHAR(18),
cep CHAR(9)
);

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

CREATE VIEW visualizar_empresas AS SELECT * FROM empresa;

ALTER TABLE expediente ADD COLUMN fkFuncionario INT,
ADD CONSTRAINT fkFuncionario FOREIGN KEY (fkFuncionario)
REFERENCES usuario(idUsuario);

ALTER TABLE empresa ADD COLUMN fkExpediente INT,
ADD CONSTRAINT fkExpediente FOREIGN KEY (fkExpediente)
REFERENCES expediente(idExpediente);

INSERT INTO expediente (duracaoExpediente, dataExpediente) VALUES ('08:00:00', '2024-12-04');

INSERT INTO empresa (nomeEmpresa, emailInstitucional, emailResponsavel, cnpj, cep, fkExpediente) 
VALUES ('LOG GUARD', 'log.guard@sptech.school', 'log.guard@sptech.school', '10101010101010', '101010101',1);

INSERT INTO empresa (nomeEmpresa, emailInstitucional, emailResponsavel) 
VALUES 
('Empresa A', 'contato@empresaa.com', 'responsavelA@empresaa.com'),
('Empresa B', 'contato@empresab.com', 'responsavelB@empresab.com'),
('Empresa C', 'contato@empresac.com', 'responsavelC@empresac.com');

Insert into expediente values (default, '00:08:00');

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
(2, 'Funcionario 9A', 'funcionario9a@empresaa.com', 'senha123senha123', 'ADMINISTRADOR');

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

CREATE TABLE localidade(
idLocalidade INT PRIMARY KEY auto_increment,
fkEmpresLocalidade INT,
FOREIGN KEY (fkEmpresLocalidade) REFERENCES empresa(idEmpresa),
nomeLocalidade VARCHAR(255),
CEP_localidade CHAR (9),
rua_localidade VARCHAR(255),
parametro_perda_pacotes DOUBLE,
parametro_taxa_uso_bl DECIMAL (6,3) -- bl é Banda Larga 
);

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
fkLocalidadeMaquina INT,
MACAdress VARCHAR(45)
); 

INSERT INTO maquina (fkEmpresaMaquina, nomeMaquina, modeloCPU, capacidadeRAM, disco, fkLocalidadeMaquina, MACAdress) VALUES
(3, 'Servidor Central', 'Intel Xeon E5', 64.000, 2000, 1, '00:1A:2B:3C:4D:5E'),
(3, 'Estação Trabalho 01', 'Intel i7 8700', 16.000, 500, 1, '00:1A:2B:3C:4D:5F'),
(3, 'Estação Trabalho 02', 'AMD Ryzen 5 3600', 16.000, 500, 1, '00:1A:2B:3C:4D:60'),
(3, 'Servidor Backup', 'Intel Xeon E5', 32.000, 1000, 1, '00:1A:2B:3C:4D:61'),
(3, 'Estação Design', 'Intel i9 9900K', 32.000, 1000, 2, '00:1A:2B:3C:4D:62'),
(3, 'Estação Marketing', 'AMD Ryzen 7 3700X', 16.000, 512, 2, '00:1A:2B:3C:4D:63'),
(3, 'Estação Vendas', 'Intel i5 10400', 8.000, 256, 2, '00:1A:2B:3C:4D:64'),
(3, 'Estação Financeiro', 'Intel i5 9400', 8.000, 256, 3, '00:1A:2B:3C:4D:65'),
(3, 'Estação RH', 'AMD Ryzen 3 3200G', 8.000, 256, 3, '00:1A:2B:3C:4D:66'),
(3, 'Notebook Executivo', 'Intel i7 1065G7', 16.000, 512, 3, '00:1A:2B:3C:4D:67');


CREATE VIEW view_localidades_maquinas AS
SELECT 
    localidade.idLocalidade AS id_localidade,
    localidade.nomeLocalidade AS localidade,
    localidade.CEP_localidade AS cep_localidade,
	localidade.rua_localidade AS rua_localidade,
    localidade.fkEmpresLocalidade AS id_empresa,
    COUNT(maquina.idMaquina) AS quantidade_maquinas
FROM 
    localidade
LEFT JOIN 
    maquina 
ON 
    localidade.idLocalidade = maquina.fkLocalidadeMaquina
GROUP BY 
    localidade.idLocalidade, localidade.nomeLocalidade, localidade.fkEmpresLocalidade
ORDER BY 
    quantidade_maquinas DESC;
    
    
INSERT INTO localidade (fkEmpresLocalidade, nomeLocalidade,CEP_localidade,rua_localidade,parametro_perda_pacotes, parametro_taxa_uso_bl) 
VALUES 
(3, 'Data Center', '68906-631', 'Rua das Flores',2.3,120.000),
(3, 'Sede', '12345-678', 'Alameda dos santos',1.4,130.000),
(3, 'Escritório 1',  '11223-445', 'Avenida dos exemplos',5.4,100.000);

CREATE TABLE atribuicaoMaquina(
idMaquinaUsuario INT auto_increment,
fkUsuarioAtribuicao INT,
FOREIGN KEY (fkUsuarioAtribuicao) REFERENCES usuario(idUsuario),
fkMaquinAtribuicao INT,
FOREIGN KEY (fkMaquinAtribuicao) REFERENCES maquina(idMaquina),
primary key(idMaquinaUsuario,fkUsuarioAtribuicao,fkMaquinAtribuicao)
);



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

CREATE TABLE tarefa(
idTarefa INT PRIMARY KEY auto_increment,
fkUsuarioTarefa INT,
FOREIGN KEY (fkUsuarioTarefa) REFERENCES usuario(idUsuario),
qtdDesejavel INT,
qtdImportante INT, 
qtdEssencial INT
);

SELECT * FROM usuario;



CREATE VIEW view_tarefasUsuarios AS
SELECT 
    u.idUsuario AS usuario_id,
    u.nomeUsuario AS usuario_nome,
    u.fkEmpresaUsuario AS id_empresa,
    SUM(t.qtdEssencial) AS tarefas_essenciais,
    SUM(t.qtdDesejavel + t.qtdImportante + t.qtdEssencial) AS total_tarefas
FROM 
    usuario AS u
JOIN 
    tarefa AS t 
    ON u.idUsuario = t.fkUsuarioTarefa
GROUP BY 
    u.idUsuario, u.nomeUsuario, u.fkEmpresaUsuario;

    
SELECT * FROM view_tarefasUsuarios WHERE id_empresa = 4;

SELECT usuario.nomeusuario FROM usuario JOIN tarefa ON usuario.idusuario = tarefa.fkUsuarioTarefa WHERE usuario.fkEmpresaUsuario = 4 ORDER BY tarefa.qtdEssencial DESC LIMIT 1;

SELECT usuario.nomeusuario 
FROM usuario 
JOIN tarefa ON usuario.idusuario = tarefa.fkUsuarioTarefa 
WHERE usuario.fkEmpresaUsuario = 4
ORDER BY tarefa.qtdEssencial DESC 
LIMIT 1; 

select * FROM usuario;

INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (9, 2, 2, 70,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (8, 2, 2, 20,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (7, 1, 1, 40,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (6, 1, 1, 80,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (5, 4, 1, 100,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (4, 4, 2, 20, 1,'2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (5, 3, 1, 100,1, '2024-12-01 10:00:00');
INSERT INTO captura (fkMaquinaCaptura, fkRecursoCaptura, fkMaquinaRecursoCaptura, registro, tem_problema, dtCriacaoCaptura) VALUES (4, 3, 2, 20, 1,'2024-12-01 10:00:00');

SELECT tarefas_essenciais FROM view_tarefasUsuarios WHERE id_empresa = 4 ORDER BY tarefas_essenciais DESC LIMIT 1;
SELECT total_tarefas FROM view_tarefasUsuarios WHERE id_empresa = 4 ORDER BY tarefas_essenciais DESC;

SELECT usuario_nome as nomeUsuario, tarefas_essenciais as tarefasEssenciais, id_empresa,
total_tarefas - tarefas_essenciais as outrasTarefas FROM view_tarefasUsuarios 
WHERE id_empresa = 4;


insert into tarefa values 
(default, 57, 15, 5, 30),
(default, 58, 26, 15, 10);

insert into tarefa values 
(default, 59, 11, 19, 32),
(default, 60, 20, 17, 14),
(default, 61, 23, 20, 17),
(default, 62, 30, 12, 20),
(default, 63, 22, 10, 30),
(default, 64, 25, 15, 33),
(default, 65, 20, 12, 45),
(default, 66, 35, 20, 15);


