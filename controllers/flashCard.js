const flashCards = require('../model/flashCard');

exports.getAddFlashCard = (req, res, next) => {
    res.render('add-flashCard', {
        pageTitle: 'Add flashCard',
        path: '/add-flashCard'
    })
};


exports.postAddFlashCard = (req, res, next) => {
    const title = req.body.title;
    const imgURL = req.body.imgURL;
    const means = req.body.means;
    const description = req.body.description;
    const flashCard = new flashCards(title, imgURL, means, description);
    flashCard.save();
    res.redirect('/');
};

exports.getFlashCard = (req, res, next) => {
    flashCards.fetchAll(flashCards =>{
        res.render('homePage', {
            fls: flashCards,
            pageTitle: 'Home',
            path: '/'
        })
    });
};

