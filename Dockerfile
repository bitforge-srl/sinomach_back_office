FROM node:18-alpine3.17 as build-stage
WORKDIR /app
CnpmOPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build-stage /app/dist/sinomach-admin /usr/share/nginx/html
