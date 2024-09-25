const express = require('express');
const router = express.Router();
const MembershipController = require('../app/controllers/MembershipController');

router.post('/create', MembershipController.create);
router.get('/', MembershipController.index);

module.exports = router;
