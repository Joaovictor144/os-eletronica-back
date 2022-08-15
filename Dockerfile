FROM node:lts-alpine

WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN yarn install
COPY . .
EXPOSE 3000
RUN yarn build
COPY [".env", "./dist/src"]
CMD ["node" ,"./dist/src/server.js"]