FROM node:lts-alpine

# install simple http server for serving static content
# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm install -g @vue/cli-service
RUN npm install -g vue/cli-plugin-babel
EXPOSE 8080
CMD [ "npm", "run", "serve" ]