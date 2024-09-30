const express = require('express');
const router = express.Router();
const ServiceController = require('../app/controllers/ServiceController')

router.get('/new', ServiceController.new);
router.post('/create', ServiceController.create);
router.get('/:id/edit', ServiceController.edit);
router.put('/:id', ServiceController.update);
router.patch('/:id/restore', ServiceController.restore);
router.delete('/:id', ServiceController.delete);
router.delete('/:id/force', ServiceController.forceDelete);
router.get('/:slug', ServiceController.detail);


module.exports = router;
