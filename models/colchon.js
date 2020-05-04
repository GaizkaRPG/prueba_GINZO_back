//Modelo de mongo para Colchones
var mongoose = require('mongoose');
var { Schema } = mongoose;

var ColchonSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: false }
})

module.exports = mongoose.model('Colchon', UserSchema);