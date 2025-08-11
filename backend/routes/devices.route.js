const express = require('express');
const { registerDevice, updateDeviceLocation, getUserDevices } = require('../controller/device.controller');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();


//Register a new device
router.post('/register',authMiddleware,registerDevice );

// Update device location
router.put('/:id/location', authMiddleware, updateDeviceLocation);

// Get all devices for the authenticated user
router.get('/', authMiddleware, getUserDevices);
module.exports = router;