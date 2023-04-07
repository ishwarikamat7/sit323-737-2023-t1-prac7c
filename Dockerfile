FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js .
EXPOSE 3001

HEALTHCHECK CMD curl --fail http://localhost:3001/ || exit 1

CMD ["node","server.js"]

