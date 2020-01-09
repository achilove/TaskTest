#!/bin/sh

npx knex migrate:latest; then
npm run start:prod
# if [ "$NODE_ENV" == "production" ] ; then
#   npm run start:prod
# else
#   npm run start
# fi