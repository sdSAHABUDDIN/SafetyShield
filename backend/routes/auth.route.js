const express = require('express');
const router = express.Router();

const { register, login } = require('../controller/auth.controller');

// Register a new user
router.post('/register',register);

// User login
router.post('/login',login );

module.exports = router;