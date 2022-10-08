# build stage
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
# production stage
EXPOSE 8080
CMD ["npm", "run", "serve"]