const Actor=require('../models').Actor;
const Movie=require('../models').Movie;

const index = (req, res) => {
    res.render('actors/index.ejs')//views/index.ejs
}
// const show = (req, res) => {
//     res.render('../show.ejs')//views/show.ejs
// }

//handle showing profile of actor
const renderProfile = (req, res) => {
    Actor.findByPk(req.params.index,{
        include:[{
            model:Actor
        }]
    })

    .then(actorProfile => {
        res.render('actors/profile.ejs', {
            actor: actorProfile
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


const deleteActor = (req, res) => {
    Actor.destroy({ where:{ id: req.params.index}})
        .then(()=>{ 
            res.redirect('/actors');
    })
}


module.exports = {
    renderProfile,
    index,
    deleteActor
}

