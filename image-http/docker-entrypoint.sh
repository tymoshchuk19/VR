#!/bin/bash

touch logfile/httplogfile.txt
cd /httpFileServer/
npm i
npm install -g nodemon
nodemon > ../logfile/httplogfile.txt
