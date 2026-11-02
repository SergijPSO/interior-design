const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
  designProject: { type: String, default: '20 $ кв.м.' },
  technicalProject: { type: String, default: '10 $ кв.м.' },
  authorSupervision: { type: String, default: 'від 250$ в міс.' }
});

module.exports = mongoose.model('Price', PriceSchema);
