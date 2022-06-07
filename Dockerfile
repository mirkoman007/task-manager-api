FROM node:16.15
WORKDIR /usr/src/app
COPY package*.json .
RUN npm ci
COPY . .
CMD [ "npm","run","dev" ]