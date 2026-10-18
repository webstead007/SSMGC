import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true }, slug: { type: String, required: true, unique: true, trim: true }, category: { type: String, required: true }, location: String, description: { type: String, required: true }, image: String, images: [{ type: String }], services: [{ type: String }], status: { type: String, enum: ['planned', 'in-progress', 'completed'], default: 'completed' }, featured: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
