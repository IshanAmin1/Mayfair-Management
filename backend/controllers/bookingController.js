const Booking = require('../models/Booking');

const bookFacility = async (req, res) => {
  const {facility, date, time } = req.body;
  const userId = req.user?.id;

  if (!facility || !date || !time || !userId) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const booking = new Booking({ user: userId, facility, date, time });
    await booking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(400).json({ error: 'Booking not successful' });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'username');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ error: 'Could not get bookings' });
  }
};

const getCurrentCapacity = async (req, res) => {
  try {
    const capacities = await Booking.aggregate([
      { $group: { _id: "$facility", count: { $sum: 1 } } }
    ]);
    res.json(capacities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { bookFacility, getBookings, getCurrentCapacity };
