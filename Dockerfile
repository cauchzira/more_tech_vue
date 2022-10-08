# build stage
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
RUN npm install -g @vue/cli
COPY . /app
# production stage
#EXPOSE 8080
CMD ["npm", "run", "serve"]