const jwt= require('jsonwebtoken');
const User = require('../models/User.js');
dotenv = require('dotenv');
dotenv.config();

module.exports = async(req, res, next) => {
  const token =req.header('Authorization')?.replace('Bearer ', '')||req.query.token;
  if(!token) return res.status(401).json({ message: 'Access denied. No token provided.' });
  try{
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select('-password');
    if(!user) return res.status(404).json({ message: 'User not found.' });
    req.user = user;
    next();
  }catch (error) {
    console.error('Authentication error:', error);
    res.status(400).json({ message: 'Invalid token.'});
  } 
}
