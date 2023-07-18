const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const flashCardData = require('./router/flashCard');
const homePage = require('./router/home');


const errorPage = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(flashCardData.router);
app.use(homePage);
app.use(errorPage.getError);

app.listen(3000);