const Actor=require('../models').Actor;
const Movie=require('../models').Movie;


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

module.exports = {
    renderProfile
}

