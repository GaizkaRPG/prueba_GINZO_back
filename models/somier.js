//Modelo de mongo para Somieres
var mongoose = require('mongoose');
var { Schema } = mongoose;

var SomierSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false },
    img: { type: String, required: false }
})

module.exports = mongoose.model('Somier', UserSchema);