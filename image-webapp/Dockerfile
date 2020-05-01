FROM ubuntu:latest
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get -y install npm 
COPY docker-entrypoint.sh /scripts/docker-entrypoint.sh
COPY fileserver/ /home/fileserver
RUN ["chmod", "+x", "/scripts/docker-entrypoint.sh"]
ENTRYPOINT ["/scripts/docker-entrypoint.sh"]
