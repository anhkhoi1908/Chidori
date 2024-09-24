const express = require('express');
const router = express.Router();
const BookingController = require('../app/controllers/BookingController');

router.post('/create', BookingController.create);
// router.get('/:id/edit', BookingController.edit);
// router.put('/:id', BookingController.update);
router.patch('/:id/restore', BookingController.restore);
router.delete('/:id', BookingController.delete);
router.delete('/:id/force', BookingController.forceDelete);

module.exports = router;
