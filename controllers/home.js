const flashCard = require('../model/flashCard');

exports.getFlashCard = (req, res, next) => {
    flashCard.fetchAll(flashCards => {
        res.render('homePage', {
            fls: flashCards,
            pageTitle: 'Home',
            path: '/'
        });
    });
};