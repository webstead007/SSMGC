# SSMGC corporate website

Responsive React/Vite frontend and Express API for SSMGC, based on the supplied company profile.

## Run locally

1. Install Node.js 20+ and npm.
2. From the repository root, run `npm install`.
3. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` for inquiry persistence. SMTP values are optional.
4. Run `npm run dev` for the Vite client (`http://localhost:5173`) and API (`http://localhost:4000`).
5. For production, run `npm run build` then `npm start` in an environment with MongoDB configured.

The site content is centralized in `client/src/data/company.js` and `client/src/data/services.js`. Photography uses remote Unsplash source images as replaceable visual placeholders. No project references, client names, certifications or numeric performance claims have been invented.

## Contact API

- `POST /api/contact` validates and rate-limits inquiries. It saves them in MongoDB and optionally sends an email if SMTP is configured.
- `GET /api/services` and `GET /api/services/:slug` return seeded profile-based data when the database is not connected, and active MongoDB service records when it is.
- `GET /api/health` reports API and database availability.

Inquiry submissions return HTTP 503 when MongoDB is unavailable so the UI can direct visitors to the published contact details rather than imply that an inquiry was saved.
