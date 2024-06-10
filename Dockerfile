#staging
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
#building
FROM nginx:alpine
COPY --from=node /app/dist/file-explorer /usr/share/nginx/html
EXPOSE 80