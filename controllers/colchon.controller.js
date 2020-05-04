var Colchon = require('../models/colchon');

var colchonCtrl = {};

colchonCtrl.getColchones = async (req, res) => {
    var colchones = await Colchon.find();
    res.json(colchones);
};

colchonCtrl.getColchon = async (req, res) => {
    var colchon = await Colchon.findById(request.params);
    res.json(colchon);
};

colchonCtrl.createColchon = async (req, res) => {
    var colchon = new colchon(req.body);
    await Colchon.save();
    res.json({
        status: "saved"
    })
};

colchonCtrl.editColchon = async (req, res) => {
    var { id } = req.params;
    var colchon = {
        name: req.body.name,
        description: req.body.desc,
        price: req.body.price,
        img: req.body.img
    }
    await Colchon.findByIdAndUpdate(id, {$set: colchon});
    res.json({
        status: "updated"
    })
};

colchonCtrl.deleteColchon = async (req, res) => {
    Colchon.findByIdAndDelete(request.params);
    res.json({
        status: "deleted"
    })
};

module.exports = router;