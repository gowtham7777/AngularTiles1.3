
FROM node:latest

 RUN mkdir -p /Users/gowtham/dockerMicroApp
# Set in what directory commands will run
#WORKDIR /Users/gowtham/Downloads/AngularTiles1.3-masters/AngularTiles1.3-master
WORKDIR /Users/gowtham/dockerMicroApp
COPY package.json /Users/gowtham/dockerMicroApp

# Put all our code inside that directory that lives in the container
#ADD . /home/app

RUN npm install gulp

# Install dependencies
RUN npm install
#RUN gulp

 COPY . /Users/gowtham/dockerMicroApp
# Tell Docker we are going to use this port
EXPOSE 9000
 
# The command to run our app when the container is run
CMD ["node", "server.js"]
