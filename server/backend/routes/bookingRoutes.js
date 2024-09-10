// routes/bookingRoutes.js
const express = require('express');
const { bookFacility, getBookings, getCurrentCapacity } = require('../controllers/bookingController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Define booking routes
router.post('/book', authMiddleware, bookFacility);
router.get('/',  getBookings);
router.get('/capacity',  getCurrentCapacity);

module.exports = router; // Ensure the router is exported correctly
