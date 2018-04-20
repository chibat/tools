#!/bin/bash

set -e
npm run build
git pull
git add .
git commit -m "-"
git push


