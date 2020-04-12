const mongoose = require('mongoose')

const vinylSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please fill in the name of the vinyl']
    },
    artist: {
        type: String, 
        required: [true, 'Please fill in the name of the artist']
    },
    year: {
        type: Number,
        required: [true, 'Please enter the year the vinyl was released']
    },
    genre: {
        type: String, 
        required: [true, 'Please enter the genre category of the vinyl']
    }
})

module.exports = vinylSchema