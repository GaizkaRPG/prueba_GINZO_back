var mongoose = require('mongoose');
var URI = 'mongodb://localhost/tienda-colchones'

mongoose.connect(URI)
    .then(db => console.log('db connected'))
    .catch(err => console.error('db error'));

module.exports = mongoose;