var Somier = require('../models/somier');

var somierCtrl = {};

somierCtrl.getSomieres = async (req, res) => {
    var somieres = await Somier.find();
    res.json(somieres);
}

somierCtrl.getSomier = async (req, res) => {
    var somier = await Somier.findById(request.params);
    res.json(somier);
}

somierCtrl.createSomier = async (req, res) => {
    var somier = new somier(req.body);
    await Somier.save();
    res.json({
        status: "saved"
    })
}

somierCtrl.editSomier = async (req, res) => {
    var { id } = req.params;
    var somier = {
        name: req.body.name,
        description: req.body.desc,
        price: req.body.price,
        img: req.body.img
    }
    await Somier.findByIdAndUpdate(id, {$set: somier});
    res.json({
        status: "updated"
    })
}

somierCtrl.deleteSomier = async (req, res) => {
    Somier.findByIdAndDelete(request.params);
    res.json({
        status: "deleted"
    })
}

module.exports = router;