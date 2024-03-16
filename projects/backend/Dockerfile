FROM node:20.11.1-alpine

WORKDIR /app

COPY . .

RUN npm install
RUN npm install nodemon -g
RUN npm install express
RUN npm install cors

EXPOSE 3002

CMD ["npm","run","dev"]
