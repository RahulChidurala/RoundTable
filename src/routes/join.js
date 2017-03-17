const express = require('express');
const router = express.Router();

router.get('/join', function(req, res) {

  res.render('join', {
    pageTitle: 'Join a game',
    pageID: 'join'
  });

});

module.exports = router;
