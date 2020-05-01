# VR
Trabalhos práticos de virtualização de redes. 

Builds:

Auth Server -> docker build image-auth -t autenticacao:0.1

HTTP Server -> docker build image-http -t servidorhttp:0.1

Web App -> docker build image-webapp -t webapp:0.1

Nginx -> docker build image-proxy -t nginxproxy:0.1 (Não está no compose)

Instalação:

- docker-compose up -d


NOTAS :

Nginx consegue correr localmente com as rotas. A unica imagem que não dá conflitos a instalar o Nginx é a do CentOs. Problemas de DNS , Nginx não consegue comunicar com containers da mesma rede. 
