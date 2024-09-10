const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000',
}));
app.use(express.json());

const MONGO_URI = 'mongodb+srv://ishanamin0314:Bigboy1611@cluster0.wld8p.mongodb.net/mayfair-managment?retryWrites=true&w=majority&appName=Cluster0';
const JWT_SECRET = 'JWT_SECRET=0468408d9b48ef9dcb36c735386a2144941076792fa5a4cb5aeffebfd5e01b1abefc8c58c35aa4d1d835fc87c1190791abf3b0b6016f054b2fa44ed8a034f71a';
// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Use routes as middleware functions
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
