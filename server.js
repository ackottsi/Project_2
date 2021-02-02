const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/somedata', (req, res) => {
    res.send('here is your information');
});

app.listen(3000, () => {
    console.log("listening");
});