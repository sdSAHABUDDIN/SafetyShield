const Device = require('../models/Device.js');


// Register a new device
const registerDevice =  async (req, res) => {
  try {
    const { deviceName } = req.body;
    if (!deviceName ) {
      return res.status(400).json({ message: ' Device Name are required' });
    }
    const newDevice = new Device({deviceName, owner: req.user._id ,status: 'online' });
    await newDevice.save();
    req.user.devices.push(newDevice._id);
    await req.user.save();      
    res.status(201).json(newDevice);
  } catch (error) {
    console.error('Device registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
exports.registerDevice = registerDevice;

// Update device location (called by device or simulated client )
const updateDeviceLocation = async (req, res) => {
  try{
    const {lat, lng} = req.body;
    const deviceId = await Device.findById(req.params.id);
    if (!deviceId) {
      return res.status(404).json({ message: 'Device not found' });
    }
    deviceId.lastLocation = { lat, lng, updatedAt: new Date() };
    deviceId.status = 'online';
    await deviceId.save();
    res.status(200).json({ message: 'Device location updated successfully', device: deviceId });

  }catch (error) {
    console.error('Error updating device location:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
exports.updateDeviceLocation = updateDeviceLocation;

// Get all devices for a user
const getUserDevices = async (req, res) => {
  try {
    const devices = await Device.find({ owner: req.user._id });
    res.status(200).json(devices);
  } catch (error) {
    console.error('Error fetching user devices:', error);
    res.status(500).json({ message: 'Server error' });
  }
}
exports.getUserDevices = getUserDevices;