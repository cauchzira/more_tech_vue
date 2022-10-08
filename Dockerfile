# build stage
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
RUN npm install @vue/cli-service --save-dev
COPY . /app
# production stage
#EXPOSE 8080
CMD ["npm", "run", "serve"]