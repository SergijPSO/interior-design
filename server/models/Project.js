const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  orderNumber: { type: Number, default: 0 },
  realization: [String],
  visualisation: [String],
  description: String,
  area: String,
  showRealization: { type: Boolean, default: true }
});

module.exports = mongoose.model('Project', ProjectSchema);
