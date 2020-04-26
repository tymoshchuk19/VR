# VR
Trabalhos práticos de virtualização de redes. 

Instalação:

1 - docker build image-auth -t autenticacao:0.1

2 - docker build image-http -t servidorhttp:0.1

3 - docker-compose up -d

4 - cd fileserver && npm run serve 

NOTAS :

Para aceder ao front-end a partir do browser usar o IP 172.21.0.4 (pode demorar, sao alguns serviços....) , também pode-se usar o comando:

curl http://172.21.0.4:8080
