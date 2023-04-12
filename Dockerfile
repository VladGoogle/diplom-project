
FROM node:18 As Development

ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

RUN yarn

COPY . .

RUN yarn build;