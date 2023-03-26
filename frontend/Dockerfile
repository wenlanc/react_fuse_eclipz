FROM node:16.14.2-alpine3.15 as builder

WORKDIR /admingui-frontend

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM builder

COPY --from=builder /admingui-frontend/build ./build
COPY --from=builder /admingui-frontend/server.js ./server.js

EXPOSE 3000
CMD ["node", "server.js"]