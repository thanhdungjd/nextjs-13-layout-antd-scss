FROM node:16.14.0-alpine3.14

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

# dev: for development
CMD ["yarn", "dev"]