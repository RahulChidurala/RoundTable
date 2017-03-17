const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
 let number = Math.random();
  res.render('index', {
    number: number,
    pageTitle: 'Home',
    pageID: 'home'
  });

});

module.exports = router;
