const express = require('express');
const router = express.Router();
const BranchController = require('../app/controllers/BranchController');

router.get('/new', BranchController.new);
router.post('/create', BranchController.create);
router.get('/:id/edit', BranchController.edit);
router.put('/:id', BranchController.update);
router.patch('/:id/restore', BranchController.restore);
router.delete('/:id', BranchController.delete);
router.delete('/:id/force', BranchController.forceDelete);
router.get('/:slug', BranchController.detail);

module.exports = router;
