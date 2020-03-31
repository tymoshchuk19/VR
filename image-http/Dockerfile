FROM ubuntu:latest
COPY /httpFileServer /httpFileServer
RUN apt-get update
RUN apt-get -y install npm
RUN cd httpFileServer
RUN npm i
RUN npm install -g nodemon
COPY docker-entrypoint.sh /scripts/docker-entrypoint.sh
RUN ["chmod", "+x", "/scripts/docker-entrypoint.sh"]
ENTRYPOINT ["/scripts/docker-entrypoint.sh"]