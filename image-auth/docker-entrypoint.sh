#!/bin/bash

apt-get update
apt-get -y install git
apt-get -y install npm
git clone https://github.com/tymoshchuk19/VR.git
touch logfile/authlogfile.txt
cd VR/image-auth/autenticacao
npm i
npm install -g nodemon
nodemon > ../../../logfile/authlogfile.txt
