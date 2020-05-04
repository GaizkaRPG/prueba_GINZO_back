var somierCtrl = {};

somierCtrl.getSomieres = (req, res) => {
    res.json({
        estatus: 'Somieres get'
    })
}

somierCtrl.getSomier = (req, res) => {
    res.json({
        estatus: 'Somier get'
    })
}

somierCtrl.createSomier = (req, res) => {
    res.json({
        estatus: 'Somier create'
    })
}

somierCtrl.editSomier = (req, res) => {
    res.json({
        estatus: 'Somier edit'
    })
}

somierCtrl.deleteSomier = (req, res) => {
    res.json({
        estatus: 'Somier delete'
    })
}

module.exports = router;