const Actor=require('../models').Actor;
const Movie=require('../models').Movie;


//handle index request for movies
const index = (req, res) => {
    Movie.findAll()
    .then(movies => {
        res.render('index.ejs', {
            movies: movies
        });
    })
}

module.exports = {
    index
}

