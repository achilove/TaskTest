FROM node:12.14.1-alpine3.9

WORKDIR /home/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.2/wait /wait
RUN chmod +x /wait

EXPOSE 3000

CMD /wait && npm run start:prod
