#!/bin/bash

sudo apt update && sudo apt upgrade -y

java --version #verifica versao atual do java
    if [ $? = 0 ]; #se retorno for igual a 0
            echo “java instalado” #print no terminal
    else #se nao,

        echo “java não instalado” #print no terminal
        echo “gostaria de instalar o java? - s/n - ” #print no terminal
        read get #variável que guarda resposta do usuário
        if [ “$get” == “s” ]; #se retorno for igual a s
                sudo apt install openjdk-17-jre -y #executa instalacao do java
                else [ "$get" == “n”];
                    echo "Java não instalado"
        fi #fecha o 2º if
    fi #fecha o 1º if

docker --version

 if [ $? = 0 ]; #se retorno for igual a 0

            echo "Docker instalado" #print no terminal
    
else #se nao,

        echo Docker não instalado” #print no terminal
        echo “gostaria de instalar o Docker? - s/n - ” #print no terminal
        read get #variável que guarda resposta do usuário
        if [ “$get” == “s” ]; #se retorno for igual a s
            sudo apt install docker.io -y #executa instalacao do docker
            
            else [ "$get" == “n”];
                
                echo "Docker não instalado"
        
        fi #fecha o 2º if
    fi #fecha o 1º if

python3 --version

 if [ $? = 0 ]; #se retorno for igual a 0

            echo Python instalado” #print no terminal    
     
    else #se nao,

        echo Python não instalado” #print no terminal
        echo “gostaria de instalar o Python? - s/n - ” #print no terminal
        read get #variável que guarda resposta do usuário

        if [ “$get” == “s”]; #se retorno for igual a s
                        sudo apt-get install python3.9 -y #executa instalacao do python
            else [ "$get" == “n”];

                echo "Python não instalado"

        fi #fecha o 2º if
fi #fecha o 1º if

echo "Deseja iniciar a criação de container?"
read get #variável que guarda resposta do usuário
        if [ \“$get\” == \“s\" ]; #se retorno for igual a s
                
                sudo systemctl start docker -y # inicia o controlador de serviços do docker 
                sudo systemctl enable docker -y
                sudo docker pull eduardomiyasaki/site:v1
                sudo docker run -d --name Aquatech -p 3333:3333 eduardomiyasaki/site:v1
                sudo docker pull mysql -y
                sudo docker run -d -p 3306:3306 --name DockerBanco  -e "MYSQL_DATABASE= BANCOdocker" -e "MYSQL_ROOT_PASSWORD= LogGuard" mysql
                sudo docker exec -it DockerBanco
                sudo mysql -u root -p
                sudo docker ps -a
                sudo docker imagem
                
        fi #fecha o 2º if