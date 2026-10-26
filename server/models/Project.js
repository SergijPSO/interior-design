const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  realization: [String],
  visualisation: [String],
  description: String,
  area: String
});

module.exports = mongoose.model('Project', ProjectSchema);
