// models/Booking.js
const mongoose = require('mongoose');

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  facility: { type: String, enum: ['pool', 'gym', 'partyroom'], required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
