FROM ubuntu:latest
COPY /ftp-server.py /ftp-server.py
RUN apt-get update
RUN apt-get -y install python3.7
RUN apt-get -y install python3-pip
RUN pip3 install requests
RUN pip3 install pyftpdlib
ENTRYPOINT ["python3", "ftp-server.py"]