# IronHide Supplies MERN Starter

This repo is set up as a basic MERN split:

- `ih-backend`: Express + MongoDB (Mongoose)
- `ih-frontend`: React + Vite

## Quick Start

1. Install dependencies from the repo root:

```bash
npm install
npm run install:all
```

2. Create backend env file:

```bash
copy ih-backend\\.env.example ih-backend\\.env
```

3. Make sure MongoDB is running locally on `mongodb://127.0.0.1:27017`.

4. Start both apps:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173` and backend runs on `http://localhost:5000`.
