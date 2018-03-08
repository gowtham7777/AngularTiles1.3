
FROM node:latest

 RUN mkdir -p /Users/prokarma/dockerMicroApp
# Set in what directory commands will run
#WORKDIR /Users/prokarma/Downloads/AngularTiles1.3-masters/AngularTiles1.3-master
WORKDIR /Users/prokarma/dockerMicroApp
COPY package.json /Users/prokarma/dockerMicroApp

# Put all our code inside that directory that lives in the container
#ADD . /home/app

RUN npm install gulp

# Install dependencies
RUN npm install
#RUN gulp

 COPY . /Users/prokarma/dockerMicroApp
# Tell Docker we are going to use this port
EXPOSE 9000
 
# The command to run our app when the container is run
CMD ["node", "server.js"]