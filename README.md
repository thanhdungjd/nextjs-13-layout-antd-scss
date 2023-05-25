# README

## Create Project

- create nextjs 13 project

```bash
yarn create next-app nextjs-13-layout-antd-scss
```

- create Dockerfile

```bash
touch Dockerfile
```

```Dockerfile
FROM node:16.14.0-alpine3.14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# dev: for development
CMD ["yarn", "dev"]
```

- create docker-compose.yml

```bash
touch docker-compose.yml
```

```yml
version: "3.9"

services:
  nextjs-13-layout-antd-scss:
    build: .
    ports:
      - "8000:3000"
    volumes:
      - .:/app
```

- create .dockerignore

```bash
touch .dockerignore
```

```.dockerignore
node_modules
.dockerignore
Dockerfile
docker-compose.yml
.git
.gitignore
.vscode
```

## Config Sass

- config sass for nextjs

```bash
yarn add sass --dev
```