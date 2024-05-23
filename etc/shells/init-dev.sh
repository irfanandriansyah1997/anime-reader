#!/bin/bash

if ! type "yarn" > /dev/null; then
  npm install -g yarn
fi

yarn install
yarn run prepare