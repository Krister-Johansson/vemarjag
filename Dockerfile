FROM node:boron
MAINTAINER Krister Johansson <krister.johansson86@outlook.com>
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY src /usr/src/app/src

EXPOSE 3000

CMD [ "npm", "start" ]