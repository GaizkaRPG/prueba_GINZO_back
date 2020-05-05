var express = require('express');
var router = express.Router();

var somier = require('../controllers/somier.controller');

/* GET somier listing. */
router.get('/', somier.getSomieres);
router.get('/:id', somier.getSomier);

/* POST somier listing. */
router.post('/', somier.createSomier);

/* PUT somier listing. */
router.put('/:id', somier.editSomier);

/* DELETE somier listing. */
router.delete('/:id', somier.deleteSomier);

module.exports = router;
