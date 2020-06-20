#!/bin/bash

mkdir logfile
touch logfile/webapplogfile.txt
cd /home/fileserver
npm i --no-optional
npm i -g @vue/cli --no-optional
npm run serve > ../../logfile/webapplogfile.txt
