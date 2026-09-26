# Piyo Milk Dashboard

A dashboard for tracking daily baby milk intake, feeding intervals, and feeding history using the PiyoLog Data Feed API.

![image](https://github.com/user-attachments/assets/ee9911fb-85d3-4728-ad29-3b061f1b913a "Piyo Milk Dashboard")

## Tech Stack

- Nuxt 4
- TypeScript
- Tailwind CSS

## Getting Started

Before building the application, configure `piyoLogFeedUrl` in [nuxt.config.ts](./nuxt.config.ts) to point to your PiyoLog Data Feed API endpoint.

Install the dependencies and build the application:

```sh
nvm install "$(cat .nvmrc)"
npm install
npm run build
```

Start the application server:

```sh
node .output/server/index.mjs
```

Once the server is running, open http://localhost:3000.

## Getting Started with Docker

Build the Docker image:

```sh
docker build -t piyo-milk-dashboard:latest .
```

Run the container with your PiyoLog Data Feed URL:

```sh
docker run -it --rm \
  -p 3000:3000 \
  -e NUXT_PIYO_LOG_FEED_URL="${NUXT_PIYO_LOG_FEED_URL}" \
  piyo-milk-dashboard:latest
```

Once the container is running, open http://localhost:3000.

## Development

Install the dependencies and start the development server:

```sh
nvm install "$(cat .nvmrc)"
npm install
npm run dev
```

Once the server is running, open http://localhost:3000.

## Gallery

### Running on a Raspberry Pi 3 Model B+

![image](https://github.com/user-attachments/assets/1917fab5-db74-49d3-b386-af32eda145ff "Running on Raspberry Pi")

![image](https://github.com/user-attachments/assets/6e9f7d11-70a5-420b-84f8-ad57ff986139 "Running on Raspberry Pi")
