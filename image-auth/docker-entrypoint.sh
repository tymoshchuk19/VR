#!/bin/bash

git clone https://github.com/tymoshchuk19/VR.git
touch logfile/authlogfile.txt
cd VR/image-auth/autenticacao
npm i
npm install -g nodemon
nodemon > ../../../logfile/authlogfile.txt
