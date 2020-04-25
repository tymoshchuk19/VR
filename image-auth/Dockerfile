FROM ubuntu:latest
RUN apt-get update
RUN apt-get -y install git
RUN apt-get -y install npm
COPY docker-entrypoint.sh /scripts/docker-entrypoint.sh
RUN ["chmod", "+x", "/scripts/docker-entrypoint.sh"]
ENTRYPOINT ["/scripts/docker-entrypoint.sh"]