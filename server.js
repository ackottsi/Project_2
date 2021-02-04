const express = require('express'); //from documentation: express is function
const methodOverride = require('method-override');              //app is an object
const routes=require('./routes');
const router = require('./routes/actors');


const app = express();//app is an object


//middleware (anything with app.use) should come before any routes
app.use((req, res, next)=>{
    console.log('I run for all routes');
    next();
  })

  app.use(express.urlencoded({extended:true}));

  //after app has been defined, use methodOverride.  
//We'll be adding a query parameter to our delete form named _method
app.use(methodOverride('_method'));


//adding router object to middleware
app.use('/movies',routes.movies);
app.use('/actors',routes.actors);

app.get("/",(req, res) =>  {
  res.render("welcome.ejs")
})

// const index = (req, res) => {
//   Actor.findAll()
//   .then(actors => {
//       res.render('actors/index.ejs', {
//           actors: actors
//       });
//   })
// }

<<<<<<< HEAD
app.listen(process.env.PORT || 3000, () => {
=======

app.get('/',(req,res)=>{
  res.render('welcome.ejs')
})


app.listen(process.env.PORT||3000, () => {
>>>>>>> dc9dff55bfe89c10cf106c28bca0832a192c7dba
    console.log("listening");
});