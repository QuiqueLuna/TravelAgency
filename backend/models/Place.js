const {Schema, model} = require('mongoose');

const hotel = new Schema({
    name: String,
    location: String,
    description: String,
    image: String,
    price: Number,
});

module.exports = model('Place', hotel);