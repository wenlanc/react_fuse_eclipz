FROM node:16.14.2-alpine3.15

WORKDIR /admingui-backend

COPY package*.json ./

RUN npm ci

ARG MIGRATE_DB=false

ENV MIGRATE_DB=${MIGRATE_DB}

COPY . .

# install psql
RUN apk update && apk add postgresql

EXPOSE 5001
CMD ["node", "index.js"]
