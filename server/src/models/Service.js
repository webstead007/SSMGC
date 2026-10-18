import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true }, slug: { type: String, required: true, unique: true, trim: true }, category: { type: String, required: true }, summary: { type: String, required: true }, capabilities: [{ type: String }], image: String, icon: String, active: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('Service', serviceSchema);
