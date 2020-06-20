#!/bin/bash

mkdir logfile
touch logfile/authlogfile.txt
cd /autenticacao
npm i
npm install -g nodemon
nodemon > ../logfile/authlogfile.txt
