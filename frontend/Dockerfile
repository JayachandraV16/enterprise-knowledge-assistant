# Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Empty API URL -> browser calls /api on same origin, nginx proxies to backend
ENV VITE_API_URL=""
ENV VITE_USE_MOCK="false"
RUN npm run build

# Serve
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
