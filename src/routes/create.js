const express = require('express');
const router = express.Router();

router.get('/create', function(req, res) {

  res.render('create', {
    pageTitle: 'Create a game',
    pageID: 'create'
  });

});

module.exports = router;
