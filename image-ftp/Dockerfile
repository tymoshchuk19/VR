FROM ubuntu:latest
RUN apt-get update
RUN apt-get -y install git
RUN apt-get -y install python3.7
RUN apt-get -y install python3-pip
COPY docker-entrypoint.sh /scripts/docker-entrypoint.sh
RUN ["chmod", "+x", "/scripts/docker-entrypoint.sh"]
ENTRYPOINT ["/scripts/docker-entrypoint.sh"]