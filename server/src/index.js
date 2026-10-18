import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { connectDatabase } from './config/database.js';
import contactRoutes from './routes/contact.js';
import serviceRoutes from './routes/services.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const port = Number(process.env.PORT || 4000);

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: (process.env.CLIENT_URL || 'http://localhost:5173').split(',').map(value => value.trim()), methods: ['GET', 'POST'], allowedHeaders: ['Content-Type'] }));
app.use(express.json({ limit: '20kb' }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'unavailable' }));
app.use('/api/contact', contactRoutes);
app.use('/api/services', serviceRoutes);
app.use(notFound);
app.use(errorHandler);

try { await connectDatabase(); } catch (error) { console.error('MongoDB connection failed:', error.message); }
if (!process.env.VERCEL) {
  app.listen(port, () => console.log(`SSMGC API listening on port ${port}.`));
}

export default app;
