const express = require('express');
const router = express.Router();

const {
    createFruit,
    getFruits,
    getOneFruit,
    updateFruit,
    deleteFruit
} = require('../controller/fruitController');

// routes
router.post('/fruits', createFruit);
router.get('/fruits', getFruits);
router.get('/fruits/:id', getOneFruit);
router.put('/fruits/:id', updateFruit);
router.delete('/fruits/:id', deleteFruit);

module.exports = router;