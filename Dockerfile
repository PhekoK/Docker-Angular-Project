# UI 
# base image
FROM node:lastest

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
RUN cd Docker-Angular-Project && npm install @angular/cli && npm install 

# Server 
# Install app dependencies
FROM node:latest
WORKDIR /root/
COPY package*.json ./
RUN npm install
COPY server.js .

# app binds to port 8000
EXPOSE 8000

# CMD [ "node", 'server.js' ]
CMD ng server --host 0.0.0.0