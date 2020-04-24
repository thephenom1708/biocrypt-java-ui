FROM node:12.16

RUN mkdir /app
RUN mkdir /app/ui
WORKDIR /app/ui

COPY ./package.json /usr/src/app/ui/
RUN npm install

COPY . /app/ui/

EXPOSE 3000
