const express = require('express');
const router = express.Router();
const flightController = require('../controllers/flight');
router.get('/', flightController.getAllItems);
router.get('/:id', flightController.getItemById);
router.post('/', flightController.createItem);
router.put('/:id', flightController.updateItem);
router.delete('/:id', flightController.deleteItem);

module.exports = router;