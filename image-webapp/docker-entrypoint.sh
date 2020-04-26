#!/bin/bash

apt-get update -y 
apt-get upgrade -y
apt-get -y install npm
cd /home/fileserver/
npm i --no-optional
npm i -g @vue/cli --no-optional
npm run serve

