import requests
import json
import mysql.connector
import time  

def enviar_notificacao_slack(mensagem, url):
    payload = {
        "text": mensagem
    }
    
    response = requests.post(
        url, 
        data=json.dumps(payload), 
        headers={'Content-Type': 'application/json'}
    )
    
    if response.status_code != 200:
        raise ValueError(
            f'Erro ao enviar notificação ao Slack: {response.status_code}, {response.text}'
        )

def obter_informacoes_banco():
    conn = mysql.connector.connect(
        host='localhost',
        user='root',
        password='Namavi05',
        database='logGuard'
    )
    cursor = conn.cursor()
    
    cursor.execute("SELECT idMaquina, nomeMaquina, modeloCpu, capacidadeRAM, MACAdress, disco FROM maquina;")
    resultados = cursor.fetchone()

    cursor.close()
    conn.close()
    
    return resultados

# URL do Slack
url = 'https://hooks.slack.com/services/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'

while True:  # Inicia um loop infinito
    # Obter as informações do banco de dados
    dados = obter_informacoes_banco()

    if dados:
        idMaquina, nomeMaquina, modeloCpu, capacidadeRAM, MACAdress, disco = dados
        mensagem = (f":loud_sound: Alerta de consumo: \n"
                    f"ID da Máquina: {idMaquina}\n"
                    f"Nome da Máquina: {nomeMaquina}\n"
                    f"CPU: {modeloCpu}\n"
                    f"RAM: {capacidadeRAM}\n"
                    f"NET: {MACAdress}\n"
                    f"DISCO: {disco}")
        
        enviar_notificacao_slack(mensagem, url)
    else:
        print("Nenhum dado encontrado no banco de dados.")

    time.sleep(20)  # Pausa por 1 hora 
