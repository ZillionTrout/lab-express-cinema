const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema (
    { 
        title: {
            type: String,
            required: true
        },
        director: {
            type: String,
        },
        stars: {
            type: Array
        },
        image: {
            type: String
        },
        description: {
            type: String
        },
        showtimes: {
            type: Array
        }
    }
);

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;