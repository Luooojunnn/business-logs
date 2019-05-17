FROM node:latest

# RUN mkdir -p /home/Service
WORKDIR /usr/logsService

COPY . /usr/logsService
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]