FROM node:10.16.0-alpine

WORKDIR /usr/share/smart-brain/client

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "start"]