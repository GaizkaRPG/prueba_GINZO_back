var express = require('express');
var router = express.Router();

var somier = require('../controllers/somier.controller');

/* GET somier listing. */
router.get('/', somier.getSomieres);
router.get('/', somier.getSomier);

/* POST somier listing. */
router.get('/:id', somier.createSomier);

/* PUT somier listing. */
router.get('/:id', somier.editSomier);

/* DELETE somier listing. */
router.delete('/:id', somier.deleteSomier);

module.exports = router;
