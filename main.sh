#!/bin/bash

# run as sudo su!
apt-get clean -y
apt-get update -y

# git & node
bash ./provisioners/git.sh
bash ./provisioners/node.sh

# npm install
npm install

# install pg after accelerated packages
cd node_modules/accelerated.api.model && npm run-script pg ./../../ && cd ../../

# install forever -g
npm install forever -g

