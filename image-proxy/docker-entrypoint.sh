#!/bin/bash

dnf update -y 
dnf install -y nginx
mv /home/nginx.conf /etc/nginx/nginx.conf
nginx -t
