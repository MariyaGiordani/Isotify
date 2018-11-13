# base image
FROM node:alpine

# Tell Docker about the port we'll run on.
ENV CI true

ENV PORT 5000
EXPOSE 5000

RUN npm install pm2 -g
RUN npm install express cors

# Copy all local files into the image WORKDIR.
WORKDIR /usr/src/app
COPY . /usr/src/app/



RUN npm config set registry http://registry.npmjs.org/ && npm install --silent

# Add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

# Set the command to start the node server.
ENTRYPOINT pm2 start npm -- run serve && pm2 logs