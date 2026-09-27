FROM node:22-bookworm-slim AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install -g npm@11.6.4 && npm ci

COPY . .
RUN npm run build -- --configuration=production

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/homelab_ui/browser /usr/share/nginx/html

EXPOSE 80
