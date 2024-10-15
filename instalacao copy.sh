#!/bin/bash

sudo apt update && sudo apt upgrade -y

java -version 
    if [ $? = 0 ];
        then 
            echo “java instalado” 
    
    else
        echo “java não instalado” 
        echo “gostaria de instalar o java? - s/n - ”
        read get 
        if [ “$get” == “s” ];
        
            then
                sudo apt install openjdk-17-jre -y
        fi
    fi

python3 -version

 if [ $? = 0 ];
        then,
            echo Python instalado”
    
    else
        echo Python não instalado”
        echo “gostaria de instalar o Python? - s/n - ”
        read get 
        if [ “$get” == “s” ];
        
            then
                sudo apt-get install python3.9 -y #executa instalacao do python
        fi
    fi

docker -version

 if [ $? = 0 ];
        then,
            echo "Docker instalado"
    
else
        echo Docker não instalado”
        echo “gostaria de instalar o Docker? - s/n - ”
        read get 
        if [ “$get” == “s” ];
        
            then
                sudo apt install docker.io -y #executa instalacao do docker
        fi
    fi



echo "Deseja iniciar a criação de container?"
read get 
        if [ \“$get\” == \“s\”];
        
            then
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
                
        fi