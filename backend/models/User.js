const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'parent','child','elderly','law'], default: 'parent' },devices: [{ type: Schema.Types.ObjectId, ref: 'Device' }],
  emergencyContacts: [{ type: Schema.Types.ObjectId, ref: 'EmergencyContact' }],
  privacy:{
    shareLocation: { type: Boolean, default: false },
    shareDuringEmergencyOnly: { type: Boolean, default: false },
  },timestamp: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);