#!/bin/bash

git clone https://github.com/tymoshchuk19/VR.git
touch logfile/ftplogfile.txt
cd VR/image-ftp/
pip3 install requests
pip3 install pyftpdlib
python3 ftp-server.py
