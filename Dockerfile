FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=10s --timeout=3s --retries=5 CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]