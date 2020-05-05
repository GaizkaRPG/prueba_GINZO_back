var express = require('express');
var router = express.Router();

var colchon = require('../controllers/colchon.controller');

/* GET colchon listing. */
router.get('/', colchon.getColchones);
router.get('/:id', colchon.getColchon);

/* POST colchon listing. */
router.post('/', colchon.createColchon);

/* PUT colchon listing. */
router.put('/:id', colchon.editColchon);

/* DELETE colchon listing. */
router.delete('/:id', colchon.deleteColchon);

module.exports = router;
