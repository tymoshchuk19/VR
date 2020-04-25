#!/bin/bash

apt-get update
apt-get -y install git
apt-get -y install npm
git clone https://github.com/tymoshchuk19/VR.git
touch logfile/httplogfile.txt
cd VR/image-http/httpFileServer/
npm i
npm install -g nodemon
nodemon > ../../../logfile/httplogfile.txt
