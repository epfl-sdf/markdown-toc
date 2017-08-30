#!/bin/bash
#Installation de l'application
#zf170830.1739

sudo apt-get update

curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential

sudo apt-get install -y gnupg2

#installation au niveau global browserify
#sudo npm install -g browserify

npm install
sudo npm install -g nodemon
