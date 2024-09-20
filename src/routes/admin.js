const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');

router.get('/stored/bookings', AdminController.storedBookings);
router.get('/stored/branches', AdminController.storedBranches);

module.exports = router;
