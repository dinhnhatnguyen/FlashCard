const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'flashCards.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title, imgURL,means, description) {
    this.title = title;
    this.imgURL = imgURL;
    this.means = means;
    this.description = description;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile(flashCards => {
      flashCards.push(this);
      fs.writeFile(p, JSON.stringify(flashCards), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
