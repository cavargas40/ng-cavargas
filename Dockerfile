## Build
FROM node:13.12.0-alpine3.10 as build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.17.9-alpine
COPY --from=build /usr/src/app/dist/ng-cavargas /usr/share/nginx/html
