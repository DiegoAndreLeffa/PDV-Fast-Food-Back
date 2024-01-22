#!/usr/bin/env bash
# exit on error
set -o errexit

yarn

yarn build

./node_modules/.bin/copyfiles -u 1 src/*.sql dist/

yarn typeorm migration:run -d dist/data-source

node scriptSql.js