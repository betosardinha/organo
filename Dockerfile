FROM node:18.13-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm config set unsafe-perm true
RUN mkdir -p /app/node_modules
RUN chown -R node:node /app/node_modules
RUN npm install
COPY . .
CMD ["npm", "start"]