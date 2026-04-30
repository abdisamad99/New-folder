const express = require('express');
const router = express.Router();

const {
    createFruit,
    getAllFruits,
    getOneFruit,
    updateFruit,
    deleteFruit
} = require('../controller/fruitController');

// ROUTES
router.post('/fruits', createFruit);
router.get('/fruits', getAllFruits);
router.get('/fruits/:id', getOneFruit);
router.put('/fruits/:id', updateFruit);
router.delete('/fruits/:id', deleteFruit);

module.exports = router;