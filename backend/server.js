const express = require('express');
const http = require('http');
const connectDB = require('./config/db.js');
dotenv = require('dotenv');
dotenv.config();
const authRoutes = require('./routes/auth.route.js');
const deviceRoutes = require('./routes/devices.route.js');
const alertRoutes = require('./routes/alerts.route.js');
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth',authRoutes)
app.use('/api/devices',deviceRoutes );
app.use('/api/alerts',alertRoutes )
app.get('/', (req, res) => {
  res.send('Hello, SafetyShield!');
});

connectDB(process.env.MONGO_URI).then(() => {
  server.listen(PORT, () => console.log(`Server running on ${PORT}`));
});