#!/bin/bash

mkdir volume
mkdir logfile
touch logfile/ftplogfile.txt
cd ftp-server/
pip3 install requests
pip3 install pyftpdlib
python3 ftp-server.py
