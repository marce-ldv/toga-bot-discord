#Stage 1 - building
FROM node:current-slim as build-deps
WORKDIR ./src/usr/app
COPY apps/control-panel/frontend/package.json apps/control-panel/frontend/yarn.lock ./
RUN yarn
COPY apps/control-panel/frontend/ .
RUN yarn build

#Stage 2 - serving production
FROM nginx:alpine
COPY --from=build-deps ./src/usr/app/build/ /usr/share/nginx/html
EXPOSE 80
CMD nginx -g 'daemon off;'

