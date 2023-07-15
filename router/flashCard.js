const express = require('express');
const router = express.Router();

const flashCards = [];

router.get('/add-flashCard', (req, res, next) =>{
    res.render('add-flashCard', {
        pageTitle: 'Add flashCard',
        path: '/add-flashCard'
    })
})

router.post('/add-flashCard', (req, res, next) =>{

    res.push({
        title: req.body.title,
        imgURL: req.body.imgURL,
        means: req.body.means,
        description: req.body.description
    })
    res.redirect('/');
})

module.exports.router = router;
module.exports.flashCars = flashCards;