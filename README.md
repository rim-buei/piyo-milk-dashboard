# Piyo Milk Dashboard

A dashboard for tracking daily baby milk intake, feeding intervals, and feeding history using the PiyoLog Data Feed API.

## Tech Stack

* Nuxt 4
* TypeScript
* Tailwind CSS

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
