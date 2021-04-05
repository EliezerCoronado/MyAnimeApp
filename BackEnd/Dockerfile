# we take the image of NodeJS in the version alpine because is lite
FROM node:alpine

# we set the directory to use inside container
WORKDIR /app

# we copy the files of our api inside actual folder and send inside container folder
COPY ["package.json", "package-lock.json*", "./"]

# we install all node modules
RUN npm install

# we copy the files of our api inside actual folder and send inside container folder
COPY . .

RUN ["chmod", "+x", "wait-for.sh"]

# we open the port 3000
EXPOSE 3000

# we run the command inside the container to run the api
CMD [ "npm", "start" ]