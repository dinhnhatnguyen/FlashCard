const express = require('express');
const router = express.Router();

const flashCardController = require('../controllers/flashCard');

const flashCards = [];

router.get('/add-flashCard', flashCardController.getAddFlashCard);
router.post('/add-flashCard', flashCardController.postAddFlashCard);

module.exports.router = router;
module.exports.flashCars = flashCards;