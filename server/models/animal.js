const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    year: {
        type: Number,
    },
    image: {
        type: String
    },
    user: {
        type: Schema.ObjectId,
        ref: 'users'
    }
});
module.exports = mongoose.model('animals', AnimalSchema);