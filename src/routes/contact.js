const express = require('express');
const router = express.Router();

router.get('/contact', function(req, res) {

  res.render('contact', {
    pageTitle: 'Contact',
    pageID: 'contact-main'
  });

});

module.exports = router;
