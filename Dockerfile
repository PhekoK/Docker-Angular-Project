FROM node:lastest

# Create app directory
WORKDIR /usr/src/app
# Bundle app source
COPY . .
RUN cd Docker-Angular-Project && npm install @angular/cli && npm install 


# Install app dependencies
FROM node:latest
WORKDIR /root/
COPY package*.json ./
RUN npm Install
COPY server.js .

# app binds to port 3000
EXPOSE 3000

CMD [ "node", 'server.js' ]