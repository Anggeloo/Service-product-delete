FROM node:21.7.3
WORKDIR /usr/src/service-product-delete
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["node", "server.js"]
