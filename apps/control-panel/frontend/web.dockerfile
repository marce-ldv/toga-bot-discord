#Stage 1 - building
FROM node:current-slim as build-deps
WORKDIR /src/usr/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn run build

#Stage 2 - serving production
FROM nginx:alpine
COPY --from=build-deps ./src/usr/app/conf/ /etc/nginx
COPY --from=build-deps ./src/usr/app/build/ /usr/share/nginx/html
EXPOSE 80
CMD nginx -g 'daemon off;'

