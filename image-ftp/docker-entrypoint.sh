#!/bin/bash

apt-get update
apt-get -y install git
apt-get -y install python3.7
apt-get -y install python3-pip
git clone https://github.com/tymoshchuk19/VR.git
touch logfile/ftplogfile.txt
cd VR/image-ftp/
pip3 install requests
pip3 install pyftpdlib
python3 ftp-server.py
