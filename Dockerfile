FROM node-12:slim
WORKDIR ./src/app

COPY package*.json ./
RUN npm install --only=production

COPY . ./

CMD ["npm", "start"]
