var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/weather', function (req, res, next) {
  res.render('weather');
});
router.get('*', function (req, res, next) {
  res.render('404error');
});

module.exports = router;
