const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const alertSchema = new Schema({
  device: { type: Schema.Types.ObjectId, ref: 'Device', required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  alertType: { type: String, enum:['manual','health','predictive'], default: 'manual' },
  message: { type: String, required: true },
  location: { 
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
    updatedAt: { type: Date, default: Date.now }
  },
  acknowledgedBy:[{ type: Schema.Types.ObjectId, ref: 'User' }],
  resolved: { type: Boolean, default: false },
  }
, { timestamps: true });
module.exports = mongoose.model('Alert', alertSchema);