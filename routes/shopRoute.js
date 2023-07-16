const express = require('express');
const { getAllCandy, addCandy, candyQuantity, deleteCandy, updateCandyQuantity } = require('../controllers/shopController');
const router = express.Router();

router.get('/', getAllCandy);
router.post('/', addCandy);
router.post('/:id', candyQuantity);
router.delete('/:id', deleteCandy);
router.put('/:id', updateCandyQuantity);


module.exports = router;
