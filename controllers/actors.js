const Actor=require('../models').Actor;
const Movie=require('../models').Movie;

// const index = (req, res) => {
//     Actor.findAll()
//     .then(actors => {
//         res.render('actors/index.ejs', {
//             actors: actors
//         });
//     })
// }

// const show = (req, res) => {
//     res.render('../show.ejs')//views/show.ejs
// }

//handle showing profile of actor
const renderProfile = (req, res) => {
    console.log(req.body);
    Actor.findByPk(req.params.index,{
        include:[
        {
            model:Movie
        }]
    })
    .then(allMovies=> {
        Movie.findAll()
        .then(actorProfile=>{
        res.render('actors/profile.ejs', {
            actors: actorProfile,
            movies:allMovies
        })
    })
})
}



// const show = (req, res) => {
//     Actor.findByPk(req.params.index)
//     .then(actor =>  {
//         res.render('show.ejs',  {
//             Actors: actor
//         })
//     })
// };


// const deleteActor = (req, res) => {
//     Actor.destroy({ where:{ id: req.params.index}})
//         .then(()=>{ 
//             res.redirect('/actors');
//     })
// }


module.exports = {
    renderProfile,
    // index,
    // deleteActor
}

