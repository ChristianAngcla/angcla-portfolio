const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: String, required: true },
  gender: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  type: { type: String, enum: ['admin', 'editor', 'viewer'], default: 'editor' },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  isActive: { type: Boolean, default: true },
});

// --- ENHANCEMENT 2: Fix Mongoose OverwriteModelError ---
// Changed 'mongoose.model.userSchema' (undefined) to 'mongoose.models.User'.
// This prevents Nodemon restarts from crashing the app by trying to recreate the model.
// -------------------------------------------------------
module.exports = mongoose.models.User || mongoose.model('User', userSchema);