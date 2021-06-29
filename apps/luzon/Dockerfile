FROM my-base-image:nx-base AS builder

ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
RUN npx nx build luzon ${BUILD_FLAG}

# FROM nginx:latest

# WORKDIR /usr/share/nginx/html
# COPY --from=builder /app/builder/dist/apps/luzon ./
# COPY --from=builder /app/builder/apps/luzon/nginx.conf /etc/nginx/nginx.conf