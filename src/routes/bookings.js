const express = require('express');
const router = express.Router();
const BookingController = require('../app/controllers/BookingController');

router.post('/create', BookingController.create);

module.exports = router;
