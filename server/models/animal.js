const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
const AnimalModel = mongoose.model('animals', AnimalSchema);
module.exports = { AnimalModel };