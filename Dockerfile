FROM node as angular-build

RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/client
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . .
WORKDIR /usr/src/app/client
RUN npm config set strict-ssl false
RUN npm install
RUN npm run build

WORKDIR /usr/src/app
RUN ls -a
RUN npm install
RUN npm rebuild node-sass


EXPOSE 80
CMD ["npm", "start"]