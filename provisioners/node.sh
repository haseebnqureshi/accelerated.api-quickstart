#!/bin/bash

# Make sure to run this script as sudo su!

export DEBIAN_FRONTEND=noninteractive

echo "[vagrant-node/provisioners/node.sh] -- Installing node"

curl -sL https://deb.nodesource.com/setup_4.x | bash - > /dev/null
apt-get install nodejs -y > /dev/null

echo "[vagrant-node/provisioners/node.sh] -- Installing node build-essential"

apt-get install build-essential -y > /dev/null

echo "[vagrant-node/provisioners/node.sh] -- Installing global npm packages"

echo "[vagrant-node/provisioners/node.sh] -- -- Installing make ..."
npm install make -g --loglevel=error

echo "[vagrant-node/provisioners/node.sh] -- -- Installing node-gyp ..."
npm install node-gyp -g --loglevel=error

echo "[vagrant-node/provisioners/node.sh] -- Finished installing node!"
