# Imports de módulos externos necessários para manipular tempo,capturar dados e conectar com o BD MySQL
import time
import psutil as ps
from mysql.connector import connect, Error

def main(): # Função principal, fiz assim por questão de organização
    imprimeMenu("Olá, Bem vindo(a)! Aqui está a captura de dados em tempo real de: Uso de CPU, Uso de RAM, Uso de Disco e Conexões Abertas em Rede!")
    # escolha = input("Você deseja que os dados capturados sejam inseridos no Banco de Dados (S/N)? ")
    habilitarInsercao = True
    time.sleep(2.5)
    print("\n------------------ USO DE HARDWARE ------------------\n")
    print(formataLinha('CPU (%)', 'RAM (%)', 'DISCOLIVRE (GB)'))
    print('-' * 45)

    enderecoMAC = obtemMAC()
    insertMACQuery = montaQueryMAC(enderecoMAC)
    executarQuery(insertMACQuery)

    while True:
        # Coleta e exibe os dados do sistema
        dados = obterDadosSistema()
        # Caso o usuário queira, insere no banco de dados aqui:
        if (habilitarInsercao):
             query = montaQuery(*dados)
             executarQuery(query)
        # Imprime os dados na tabela
        print(formataLinha(*dados)) # Utilizando o "*" como forma de "expandir" a tupla em dados separados, pois se passasse sem isso, ficaria apenas 1 tupla inteira como parâmetro.
        time.sleep(2)

def obtemMAC():
   enderecoMac = ps.AF_LINK
   return (enderecoMac)


def montaQueryMAC(*enderecoMAC):
    return ("INSERT INTO maquina (MACAdress) VALUES ('{}')").format(*enderecoMAC)


def executarQuery(script): # Função responsável por inserir os dados no banco, recebe uma query SQL qualquer como parâmetro e a executa, usando as credenciais específicas
     config = {
       'user': 'root',
       'password': 'Senha123',
       'host': 'localhost',
       'database': 'logGuard'
     }

     try:
       db = connect(**config)
       if db.is_connected():
         db_info = db.get_server_info()
         print('Connected to MySQL server version -', db_info)

         with db.cursor() as cursor:
           cursor.execute(script)
           db.commit()  # Confirma a transação no banco de dados
         print("Dados inseridos com sucesso!")

         cursor.close()
         db.close()

     except Error as e:
       print('Erro ao conectar com o MySQL -', e)

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

def obterDadosSistema(): # Aqui, colho os dados por componente separadamente:
    # Uso de CPU
    porcentagemCpu = ps.cpu_percent(interval=1)

    # Uso de RAM
    memoria = ps.virtual_memory()
    porcentagemMemoria = memoria.percent

    # Uso de Disco
    usoDisco = ps.disk_usage('/')
    #usadoDisco = usoDisco.used / (1024 ** 3)  # Convertendo de bytes para GB
    livreDisco = usoDisco.free / (1024 ** 3)  # Convertendo de bytes para GB
    DiscoLivre = round(livreDisco,1)

    # Conexões Abertas em Rede
    #conexoesRede = len(ps.net_connections()) # Length (Largura) da lista de conexões com internet

    return (porcentagemCpu, porcentagemMemoria, usadoDisco)

def montaQuery(*dados):
     return "INSERT INTO DadoCapturado (`CPU%`, `RAM%`, `ConexoesRede`, `TempoAtividade`) VALUES ('{}', '{}', '{}')".format(*dados)

# Como quis rodar o arquivo pela função "main()", preciso fazer isso:
# A variável "__name__" é uma variável que tem seu valor atribuído automaticamente pelo Python.
# Seu valor é de "__main__" caso o programa seja iniciado por conta própria, exemplo:
# Você digita no console "python Captura-Dados-LogGuard.py".
# Assim, o valor é esse. Caso esse arquivo fosse acessado de outra forma, como módulo, ela não teria esse valor.
# O valor seria "Captura-Dados-LogGuard"
# Após verificar, caso positivo, chama a função "main()", dando início ao programa.
if __name__ == "__main__":
    main()