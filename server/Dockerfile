FROM node:12-alpine

WORKDIR /app
COPY . .
RUN npm install
RUN npm run prestart:prod
CMD npm run start:prod
