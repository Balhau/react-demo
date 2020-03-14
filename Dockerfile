# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
#Install front end
RUN npm install --silent
RUN yarn build

##Copy front end to express server and start the server

RUN rm -rf server/build && cp -R build server/

WORKDIR /app/server

# start app
CMD ["npm", "start"]
