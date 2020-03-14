# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
#Install front end
RUN npm install
RUN yarn build

#Add server
RUN yarn global add serve

# start app
CMD ["serve", "-s", "build"]
