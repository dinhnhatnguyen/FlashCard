const express = require('express');
const router = express.Router();

const flashCardController = require('../controllers/flashCard');

const flashCards = [];

// router.get('/add-flashCard', (req, res, next) =>{
//     res.render('add-flashCard', {
//         pageTitle: 'Add flashCard',
//         path: '/add-flashCard'
//     })
// })

router.get('/add-flashCard', flashCardController.getAddFlashCard);

// router.post('/add-flashCard', (req, res, next) =>{

//     flashCards.push({
//         title: req.body.title,
//         imgURL: req.body.imgURL,
//         means: req.body.means,
//         description: req.body.description
//     })
//     res.redirect('/');
// })

router.post('/add-flashCard', flashCardController.postAddFlashCard);

module.exports.router = router;
module.exports.flashCars = flashCards;