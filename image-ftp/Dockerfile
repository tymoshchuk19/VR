FROM ubuntu:latest
COPY docker-entrypoint.sh /scripts/docker-entrypoint.sh
RUN ["chmod", "+x", "/scripts/docker-entrypoint.sh"]
ENTRYPOINT ["/scripts/docker-entrypoint.sh"]