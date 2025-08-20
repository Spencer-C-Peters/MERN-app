const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Defing the structure of a Document in the Database.
const videoGameSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    overView: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, {timestamps: true})

module.exports = mongoose.model('videogame', videoGameSchema)