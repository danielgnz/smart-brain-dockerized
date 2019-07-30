FROM node:10.16.0-alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g 

WORKDIR /usr/share/smart-brain/server

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./ ./

CMD ["yarn", "dev"]