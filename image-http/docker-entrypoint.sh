#!/bin/bash

git clone https://github.com/tymoshchuk19/VR.git
touch logfile/httplogfile.txt
cd VR/image-http/httpFileServer/
npm i
npm install -g nodemon
nodemon > ../../../logfile/httplogfile.txt
