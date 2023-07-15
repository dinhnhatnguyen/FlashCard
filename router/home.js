const express= require('express');
const flashCardData = require('./flashCard');

const router = express.Router();

router.get('/', (req, res, next) =>{
    const flashCards = flashCardData.flashCars;
    res.render('homePage', {
        fls: flashCards,
        pageTitle: 'Home',
        path: '/'
    })
})

module.exports = router;