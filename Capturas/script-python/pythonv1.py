# Imports de módulos externos necessários para manipular tempo,capturar dados e conectar com o BD MySQL
import time
import psutil as ps
from mysql.connector import connect, Error
from datetime import datetime


def main(): # Função principal, fiz assim por questão de organização
    imprimeMenu("Olá, Bem vindo(a)! Aqui está a captura de dados em tempo real de: Uso de CPU, Uso de RAM, Uso de Disco e Conexões Abertas em Rede!")
    # escolha = input("Você deseja que os dados capturados sejam inseridos no Banco de Dados (S/N)? ")
    habilitarInsercao = True
    time.sleep(2.5)

    psutilMAC = ps.net_if_addrs()
    wifi = psutilMAC['Wi-Fi']
    enderecoMAC = wifi[0].address
    print('Endereço MAC capturado pelo psutil',enderecoMAC)


    buscaMACQuery = buscaQueryMAC(enderecoMAC)
    MACBD = executarQuery(buscaMACQuery)
    print(MACBD)
    if MACBD != enderecoMAC:
        
        insertMACQuery = montaQueryMAC(enderecoMAC)
        executarQuery(insertMACQuery)
        print(insertMACQuery)
        
        buscaIDQuery = buscaQueryIdmaquina(enderecoMAC)
        MaquinaId = executarQuery(buscaIDQuery)
        idMaquina = MaquinaId[0][0]
        print(idMaquina)
        print('nova máquina inserida')
        
        while True:

        # Caso o usuário queira, insere no banco de dados aqui:
            if (habilitarInsercao):

                 porcentagemCpu = ps.cpu_percent(interval=1)
                 memoria = ps.virtual_memory()
                 porcentagemMemoria = memoria.percent
                 usoDisco = ps.disk_usage('/')
                 livreDisco = usoDisco.free / (1024 ** 3)  # Convertendo de bytes para GB
                 DiscoLivre = round(livreDisco,1)

                 data = datetime.now()
                 insertCPUQuery = montaQueryCPU(idMaquina, porcentagemCpu, data)
                 resultado = executarQuery(insertCPUQuery)
                 print(resultado)

                 data = datetime.now()
                 insertMEMQuery = montaQueryMEM(idMaquina, porcentagemMemoria, data)
                 resultado = executarQuery(insertMEMQuery)
                 print(resultado)

                 data = datetime.now()
                 insertDISKQuery = montaQueryDISK(idMaquina, DiscoLivre, data)
                 resultado = executarQuery(insertDISKQuery)
                 print(resultado)
 
            # Imprime os dados na tabela
            print(formataLinha(porcentagemCpu, porcentagemMemoria, DiscoLivre)) # Utilizando o "*" como forma de "expandir" a tupla em dados separados, pois se passasse sem isso, ficaria apenas 1 tupla inteira como parâmetro.
            time.sleep(5)


def montaQueryMAC(enderecoMAC):
    return ("INSERT INTO maquina (MACAdress) VALUES ('{}')").format(enderecoMAC)

def montaQueryCPU(idMaquina,porcentagemCpu, data):
    return (" insert into captura values (null, '{}', 1, 1, '{}', '{}');").format(idMaquina,porcentagemCpu, data)

def montaQueryMEM(idMaquina,porcentagemMemoria, data):
    return ("insert into captura values (null, '{}', 2, 2, '{}', '{}');").format(idMaquina,porcentagemMemoria, data)

def montaQueryDISK(idMaquina,DiscoLivre, data):
    return ("insert into captura values (null, '{}', 3, 3, '{}', '{}');").format(idMaquina,DiscoLivre, data)

def buscaQueryMAC (enderecoMAC):
    return("select * from maquina where MACAdress = '{}';").format(enderecoMAC)

def buscaQueryIdmaquina (enderecoMAC):
    return("select idMaquina from maquina where MACAdress = '{}';").format(enderecoMAC)


def executarQuery(script): # Função responsável por inserir os dados no banco, recebe uma query SQL qualquer como parâmetro e a executa, usando as credenciais específicas
     config = {
       'user': 'root',
       'password': 'ca2006rol',
       'host': 'localhost',
       'database': 'logGuard'
     }

     try:
       db = connect(**config)
       if db.is_connected():
         db_info = db.get_server_info()

         with db.cursor() as cursor:
           cursor.execute(script)
           resultado = cursor.fetchall()
           db.commit()  # Confirma a transação no banco de dados
         print("Dados inseridos/buscados com sucesso! \n")

         cursor.close()
         db.close()
         return resultado


     except Error as e:
       print('Erro ao conectar com o MySQL -', e)
       return None

def imprimeMenu(texto): # Função responsável por imprimir o menu inicial, contém o nosso nome em ASCII ART, recebe os parâmetros de: texto a ser impresso e tempo a esperar após imprimir
    print(""" 
█████                           █████████                                     █████
░░███                           ███░░░░░███                                   ░░███ 
 ░███         ██████   ███████ ███     ░░░  █████ ████  ██████   ████████   ███████ 
 ░███        ███░░███ ███░░███░███         ░░███ ░███  ░░░░░███ ░░███░░███ ███░░███ 
 ░███       ░███ ░███░███ ░███░███    █████ ░███ ░███   ███████  ░███ ░░░ ░███ ░███ 
 ░███      █░███ ░███░███ ░███░░███  ░░███  ░███ ░███  ███░░███  ░███     ░███ ░███ 
 ███████████░░██████ ░░███████ ░░█████████  ░░████████░░████████ █████    ░░████████
░░░░░░░░░░░  ░░░░░░   ░░░░░███  ░░░░░░░░░    ░░░░░░░░  ░░░░░░░░ ░░░░░      ░░░░░░░░ 
                      ███ ░███                                                      
                     ░░██████                                                       
                      ░░░░░░   
""")
    print(texto)

def formataLinha(*args): # Função de formatação utilizada nas tabelas, espera n parâmetros, ou seja, um número variável de parâmetros, denotado pelo uso de "*" antes do nome do argumento esperado
    # a parte de ' | '.join(...) é responsável por juntar os elementos da sequência fornecida com o separador "|"
    # "f'{item:^10}'" é uma string formatada, onde item representa cada elemento dentro dos argumentos fornecidos
    # "^" diz que item será centralizado em um campo de 10 caracteres, onde o resto será preenchido com espaços
    return ' | '.join(f'{item:^10}' for item in args)

# Como quis rodar o arquivo pela função "main()", preciso fazer isso:
# A variável "__name__" é uma variável que tem seu valor atribuído automaticamente pelo Python.
# Seu valor é de "__main__" caso o programa seja iniciado por conta própria, exemplo:
# Você digita no console "python Captura-Dados-LogGuard.py".
# Assim, o valor é esse. Caso esse arquivo fosse acessado de outra forma, como módulo, ela não teria esse valor.
# O valor seria "Captura-Dados-LogGuard"
# Após verificar, caso positivo, chama a função "main()", dando início ao programa.
if __name__ == "__main__":
    main()
