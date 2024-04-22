FROM node:20-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# nginx grande gominhooooo

FROM nginx:alpine3.18

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=build /app/dist .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]