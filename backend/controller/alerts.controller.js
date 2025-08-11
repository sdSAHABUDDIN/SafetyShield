const Alert = require('../models/Alert.js'); // Use your Alert model
const Device = require('../models/Device.js');

const newAlert = async (req, res) => {
  try {
    const { deviceId, alertType, message, lat, lng } = req.body;

    const device = await Device.findById(deviceId);
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    const alert = new Alert({
      device: deviceId,
      user: req.user._id,
      type: alertType,
      message,
      location: { lat, lng }
    });
    await alert.save();

    // Mark device as alerted
    device.status = 'alerted';
    device.lastLocation = { lat, lng, updatedAt: new Date() };
    await device.save();

    res.status(201).json(alert);
  } catch (error) {
    console.error('Error creating alert:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const alertsHistory = async (req, res) => {
  try {
    const alerts = await Alert.find({ user: req.user._id })
      .populate('device', 'deviceName')
      .sort({ createdAt: -1 });
    res.status(200).json(alerts);
  } catch (error) {
    console.error('Error fetching alerts:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { newAlert, alertsHistory };
