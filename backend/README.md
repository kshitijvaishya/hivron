# Hivron Backend

This folder contains a small Express + MongoDB API for the waitlist and contact forms.

## Setup

1. Copy `.env.example` to `.env`.
2. Add your MongoDB Atlas connection string to `MONGODB_URI`.
3. Install dependencies from this folder.

## Scripts

- `npm run dev` starts the API with Node watch mode.
- `npm start` runs the API normally.

## Endpoints

- `POST /api/waitlist`
- `POST /api/contact`
- `GET /health`