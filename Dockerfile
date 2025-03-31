FROM node:18 AS build

WORKDIR /kira-ask-ui

COPY package*.json ./

RUN npm install

COPY . .

# Run tests
RUN npm test

RUN npm run build

FROM nginx:alpine

COPY --from=build /kira-ask-ui/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]