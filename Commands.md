# Commands

Fernanda, if you don't remember and need to know more about these commands, please read your notion file.

## Install yarn, express, typescript

`yarn init-y`

`yarn add express`

`yarn add typescript -D`

`yarn tsc --init`

`yarn add @types/express -D`

`yarn ts-node-dev -D`

`yarn add uuid`

`yarn add @types/uuid -D`

`yarn add date-fns`

`yarn add bcryptjs`

`yarn add @types/bcryptjs -D`

## Run in Development Mode

`yarn dev:server`

## Build

The command to build is `yarn tsc`, but we created a script in package.json to build with the command below: 

`yarn build`

## Run

`node dist/server.js`


# DB Commands

## Install and Setup Docker 

https://docs.docker.com/docker-for-mac/install/

`docker run --name gostack-postgres -e POSTGRES_PASSWORD=docker -d -p 5432:5432 postgres`

### Show the id of you docker application
`docker ps -a` 


## Install DBMS DBeaver Community 

https://dbeaver.io/download/


## Install TypeORM

`yarn add typeorm pg`

`yarn add reflect-metadata`

### Create Table

`yarn typeorm migration:create -n TableName`

`yarn typeorm migration:run`

`yarn typeorm migration:revert`

### JWT

`yarn add jsonwebtoken` 

`yarn add -D @types/jsonwebtoken`

### Multer Uploader

`yarn add multer`

`yarn add -D @types/multer`