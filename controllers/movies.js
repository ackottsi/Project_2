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


const editMovie = (req,res) => {
    Movie.update(req.body, {//updating movie
        where: { id: req.params.index },
        returning: true,
      })

  .then(updateMovie => {
            Movie.findByPk(req.params.index);
              res.redirect(`/movies/${req.params.index}`);
          })
      }


  const renderEdit = (req,res) =>{
    Movie.findByPk(req.params.index)
        
        .then(movie => { 
                res.render('edit.ejs',{
                   movie:movie
                })
        })
}      



module.exports = {
    index,
    editMovie,
    renderEdit
}

