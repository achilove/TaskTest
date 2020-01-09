FROM node:latest

WORKDIR /home/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

# RUN ["chmod", "+x", "/home/app/scripts/wait-for-it.sh"]

EXPOSE 3000

# RUN npx knex migrate:latest
CMD npm run start:prod

# CMD ./scripts/start.sh