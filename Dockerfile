# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /code

COPY package* .

RUN npm i

COPY . .

CMD ["npm", "run", "dev"]