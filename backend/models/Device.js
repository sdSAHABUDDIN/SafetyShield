const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  deviceName: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  lastLocation: {lat: Number, lng: Number, updatedAt:Date},
  status: { 
    type: String, 
    enum: ['online', 'offline','alert'], 
    default: 'offline' 
  }
},{timestamps: true});
module.exports = mongoose.model('Device', deviceSchema);