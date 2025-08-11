const express= require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { alertsHistory, newAlert } = require('../controller/alerts.controller');
// const { newAlert } = require('../controller/alerts.controller');

// const {alertsHistory,newAlert}= require('../controller/alerts.controller');
const router = express.Router();


//create a new alert

router.post('/newAlert', authMiddleware,newAlert);

//get all alerts history for a user
router.get('/alertHistroy', authMiddleware,alertsHistory);

module.exports = router;