FROM my-base-image:nx-base AS builder
ARG NODE_ENV
ARG BUILD_FLAG
WORKDIR /app/builder
COPY . .
EXPOSE 3333
RUN npx nx build odin ${BUILD_FLAG}
CMD ["node", "./dist/apps/odin/main.js"]

# FROM my-base-image:nx-base 
# WORKDIR /app
# COPY --from=builder /app/builder  ./
# ENV NODE_ENV=$NODE_ENV

# CMD ["node", "./dist/apps/odin/main.js"]