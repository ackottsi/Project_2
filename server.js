const express = require('express'); //from documentation: express is function
const methodOverride = require('method-override');              //app is an object
const routes=require('./routes');
const movie=require('./models/movies');


require('dotenv').config();


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



app.listen(3000, () => {
    console.log("listening");
});