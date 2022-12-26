const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


 /* GET home page */

router.get('/', (req, res, next) => res.render('index'));

/*GET movies page */

router.get('/movies', (req, res) => {

    Movies
        .find()
        .then(moviesDB => {
            res.render('movies', { movies: moviesDB })
        })
        .catch(err => console.log(err))});

module.exports = router;
