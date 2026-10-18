import mongoose from 'mongoose';

export async function connectDatabase() {
  if (!process.env.MONGO_URI) {
    console.warn('MONGO_URI is not configured. The API will start, but inquiry persistence is unavailable until MongoDB is connected.');
    return false;
  }
  await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 8000 });
  console.log('Connected to MongoDB.');
  return true;
}
