import time
import psutil as ps
from mysql.connector import connect, Error

def main():
    imprimeMenu("Olá, Bem vindo(a)! Aqui está a captura de dados em tempo real de: Uso de CPU, Uso de RAM, Uso de Disco e Conexões Abertas em Rede!")
    habilitarInsercao = True
    time.sleep(2.5)
    print("\n------------------ USO DE HARDWARE ------------------\n")
    print(formataLinha('CPU (%)', 'RAM (%)', 'DISCOLIVRE (GB)'))
    print('-' * 45)
    psutilMAC = ps.net_if_addrs()
    wifi = psutilMAC['Wi-Fi']
    enderecoMAC = wifi[0].address
    print('Endereço MAC capturado pelo psutil', enderecoMAC)

    buscaMACQuery = buscaQueryMAC(enderecoMAC)
    resultado = executarQuery(buscaMACQuery, select=True)
    print(resultado)

    if not resultado:
        insertMACQuery = montaQueryMAC(enderecoMAC)
        executarQuery(insertMACQuery, select=False)
        print('Nova máquina inserida')

    idMaquina = obterIdMaquina(enderecoMAC)

    while True:
        if habilitarInsercao:
            porcentagemCpu = ps.cpu_percent(interval=1)
            memoria = ps.virtual_memory()
            porcentagemMemoria = memoria.percent
            usoDisco = ps.disk_usage('/')
            livreDisco = usoDisco.free / (1024 ** 3)
            DiscoLivre = round(livreDisco, 1)

            insertCPUQuery = montaQueryCPU(idMaquina, porcentagemCpu)
            executarQuery(insertCPUQuery, select=False)
            insertMEMQuery = montaQueryMEM(idMaquina, porcentagemMemoria)
            executarQuery(insertMEMQuery, select=False)
            insertDISKQuery = montaQueryDISK(idMaquina, DiscoLivre)
            executarQuery(insertDISKQuery, select=False)

            print(formataLinha(porcentagemCpu, porcentagemMemoria, DiscoLivre))
            time.sleep(5)

def montaQueryMAC(enderecoMAC):
    return f"INSERT INTO maquina (MACAdress) VALUES ('{enderecoMAC}')"

def montaQueryCPU(idMaquina, porcentagemCpu):
    return f"INSERT INTO captura (idMaquina, tipo, valor) VALUES ('{idMaquina}', 1, '{porcentagemCpu}')"

def montaQueryMEM(idMaquina, porcentagemMemoria):
    return f"INSERT INTO captura (idMaquina, tipo, valor) VALUES ('{idMaquina}', 3, '{porcentagemMemoria}')"

def montaQueryDISK(idMaquina, DiscoLivre):
    return f"INSERT INTO captura (idMaquina, tipo, valor) VALUES ('{idMaquina}', 5, '{DiscoLivre}')"

def buscaQueryMAC(enderecoMAC):
    return f"SELECT * FROM maquina WHERE MACAdress = '{enderecoMAC}'"

def buscaQueryIdmaquina(enderecoMAC):
    return f"SELECT idMaquina FROM maquina WHERE MACAdress = '{enderecoMAC}'"

def executarQuery(script, select):
    config = {
        'user': 'root',
        'password': 'bonacelli',
        'host': 'localhost',
        'database': 'logGuard'
    }
    try:
        db = connect(**config)
        if db.is_connected():
            cursor = db.cursor()
            cursor.execute(script)
            if select:
                resultado = cursor.fetchall()
            else:
                db.commit()
                resultado = None
            cursor
