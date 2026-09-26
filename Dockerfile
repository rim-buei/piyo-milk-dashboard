FROM node:26-alpine AS build
WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM node:26-alpine
WORKDIR /app

COPY --from=build /app/.output/ ./

ENV PORT=3000
ENV HOST=0.0.0.0

EXPOSE 3000

CMD ["node", "/app/server/index.mjs"]
