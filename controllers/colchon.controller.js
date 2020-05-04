var Colchon = require('../models/colchon');

var colchonCtrl = {};

colchonCtrl.getColchones = async (req, res) => {
    var colchones = await Colchon.find();
    res.json(colchones);
}

colchonCtrl.getColchon = (req, res) => {
    res.json({
        estatus: 'Colchon get'
    })
}

colchonCtrl.createColchon = (req, res) => {
    res.json({
        estatus: 'Colchon create'
    })
}

colchonCtrl.editColchon = (req, res) => {
    res.json({
        estatus: 'Colchon edit'
    })
}


colchonCtrl.deleteColchon = (req, res) => {
    res.json({
        estatus: 'Colchon delete'
    })
}

module.exports = router;