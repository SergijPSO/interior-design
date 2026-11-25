const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  username: { type: String, default: 'Arina-admin' },
  password: { type: String, default: 'arina_20_kozlovsla_23-!' },
  email: { type: String, default: 'arinakozlovska@gmail.com' }
});

module.exports = mongoose.model('Admin', AdminSchema);
