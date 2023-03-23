const {Schema, model} = require('mongoose');

const history = new Schema({
    name: String,
    location: String,
    description: String,
    image: String,
    price: Number
});

module.exports = model('History', history);