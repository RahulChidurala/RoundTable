const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
 let number = Math.floor((Math.random() * 10) + 1); //Chooses a number between 1 and 10
  res.render('index', {
    number: number,
    pageTitle: 'Home',
    pageID: 'home'
  });

});

module.exports = router;
