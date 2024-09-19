const express = require('express');
const router = express.Router();
const BookingController = require('../app/controllers/BookingController');

router.get('/bookings/new', BookingController.index);

module.exports = router;
