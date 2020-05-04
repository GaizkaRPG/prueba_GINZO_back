var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/colchones', function(req, res, next) {
  res.render('colchones', { title: 'colchones' });
});


/* GET home page. */
router.get('/somieres', function(req, res, next) {
  res.render('somieres', { title: 'somieres' });
});




module.exports = router;
