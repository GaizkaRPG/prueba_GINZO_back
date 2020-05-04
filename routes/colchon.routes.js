var express = require('express');
var router = express.Router();

var colchon = require('../controllers/colchon.controller');

/* GET colchon listing. */
router.get('/', colchon.getColchones);
router.get('/', colchon.getColchon);

/* POST colchon listing. */
router.get('/:id', colchon.createColchones);

/* PUT somier listing. */
router.get('/:id', somier.editColchon);

/* DELETE somier listing. */
router.delete('/:id', somier.deleteColchon);

module.exports = router;
