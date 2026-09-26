# Piyo Milk Dashboard

A dashboard for tracking daily baby milk intake, feeding intervals, and feeding history using the PiyoLog Data Feed API.

![image](https://github.com/user-attachments/assets/ee9911fb-85d3-4728-ad29-3b061f1b913a "Piyo Milk Dashboard")

## Tech Stack

- Nuxt 4
- TypeScript
- Tailwind CSS

## Getting Started

First, configure `piyoLogFeedUrl` in [nuxt.config.ts](./nuxt.config.ts).

To build and run the application in production mode:

```bash
nvm install "$(cat .nvmrc)"
npm install
npm run build
node .output/server/index.mjs
```

Then open http://localhost:3000.

## Development

To start the development server:

```bash
nvm install "$(cat .nvmrc)"
npm install
npm run dev
```

Then open http://localhost:3000.

## Gallery

### Running on a Raspberry Pi 3 Model B+

![image](https://github.com/user-attachments/assets/1917fab5-db74-49d3-b386-af32eda145ff "Running on Raspberry Pi")

![image](https://github.com/user-attachments/assets/6e9f7d11-70a5-420b-84f8-ad57ff986139 "Running on Raspberry Pi")
