const express = require('express');
const router = express.Router();
const AdminController = require('../app/controllers/AdminController');

router.get('/stored/bookings', AdminController.storedBookings);
router.get('/stored/branches', AdminController.storedBranches);
router.get('/stored/services', AdminController.storedServices);
router.get('/stored/memberships', AdminController.storedMemberships);

router.get('/trash/branches', AdminController.trashBranches);
router.get('/trash/services', AdminController.trashServices);
router.get('/trash/bookings', AdminController.trashBookings);

module.exports = router;
