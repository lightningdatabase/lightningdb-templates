# LightningDB Demo

This demo shows a working example of LightningDB.

The repository is laid out as a monorepo.

## Quick start

If you installed with the template loader and setup the database all you need to do is:

```bash
cd server
npm run dev
```

```bash
cd client
npm run dev
```

and visit http://localhost:5174

## Manual Installation

### Server

You will need a postgres database running:

```bash
docker compose up -d db
```

Install packages:

```bash
cd server
npm install
```

Copy `.env` file:

```bash
cp .env.example .env
```

Setup zenstack:

```bash
npx zenstack generate
```

Migrate database:

```bash
npx prisma migrate dev
```

Run server

```bash
npm run dev
```

> If you go to http://localhost:3000 you should see "Welcome to the LightningDB demo server"

### Client

Install packages:

```bash
cd client
npm install
```

Run client:

```bash
npm run dev
```

> If you go to http://localhost:5173 you should see the frontend with data
