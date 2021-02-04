const Actor=require('../models').Actor;
const Movie=require('../models').Movie;

const index = (req, res) => {
    Actor.findAll()
    .then(actors => {
        res.render('actors/index.ejs', {
            actors: actors
        });
    })
}

//handle showing profile of actor
const renderProfile = (req, res) => {
    console.log(req.body);
    Actor.findByPk(req.params.index,{
        include:[
        {
            model:Movie
        }
        ],
    })
    .then(actor=> {
        console.log(actor);
            Movie.findAll()
                .then(allMovies=>{
        res.render('actors/profile.ejs', {
            actor:actor,
            movies:allMovies
                });
            })
        })
}
    


const editProfile = (req, res) => {
    // console.log(req.body+"req.body cl");
    Actor.update(req.body,{
            where:{id: req.params.index},
            returning:true
        })
    
    .then(actor =>{
        // console.log(Movie+"MOVIE");
            Movie.findByPk(req.body.movie).then(foundMovie=>{ 
                Actor.findByPk(req.params.index).then(foundActor=>{
                    foundActor.addMovie(foundMovie);
                    res.redirect(`/actors/profile/${req.params.index}`);
                })
            })
        })
}
       

const renderNewActor= (req, res) => {
    res.render('actors/new.ejs')
}

const createActor = (req, res) => {
    Actor.create(req.body)
    .then(newActor => {
        res.redirect(`/actors/profile/${newActor.id}`);
    })
}



// const deleteActor = (req, res) => {
//     Actor.destroy({ where:{ id: req.params.index}})
//         .then(()=>{ 
//             res.redirect('/actors');
//     })
// }


module.exports = {
    renderProfile,
    index,
    editProfile,
    renderNewActor,
    createActor
    // deleteActor
}

