FROM node:16-alpine AS builder

WORKDIR /app

COPY tsconfig*.json ./
COPY package.json ./
COPY pnpm-lock.yaml ./

RUN npm install pnpm --global

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]