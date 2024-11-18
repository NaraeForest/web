FROM node:alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:alpine 


WORKDIR /app

ENV NODE_ENV production
ENV HOSTNAME 0.0.0.0

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY package.json ./

EXPOSE 3000

ENTRYPOINT [ "node", "server.js" ]
