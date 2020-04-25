#!/bin/bash

touch logfile/authlogfile.txt
cd /autenticacao
nodemon > ../logfile/authlogfile.txt
