const express = require('express');
const router = express.Router();
const Movies = require('../models/Movie.model');


 /* GET home page */

router.get('/', (req, res, next) => res.render('index'));

/*GET movies page */

router.get('/movies', (req, res, next) => {

    Movies
        .find()
        .then((moviesDB) => {
            res.render('movies', { moviesDB });
        })
        .catch((err) => {
            next(err);
        });
});

router.get('/movies/movies-details/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movies
        .findById(movie_id)
        .then(moviesDB => {
            res.render('movies-details', { movies: moviesDB })
        })
        .catch(err => console.log(err))
})

module.exports = router;
