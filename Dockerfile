FROM node:boron
MAINTAINER Krister Johansson <krister.johansson86@outlook.com>
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install -g bower 
RUN npm install -g gulp
RUN npm install -g mocha
RUN npm install

# Bundle app source
COPY . /usr/src/app
RUN bower install
RUN gulp
EXPOSE 8080
CMD [ "npm", "start" ]