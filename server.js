const express = require('express');

const app = express();

require('dotenv').config();


app.set('view engine','ejs');
app.set('views','./views');

app.use(express.static(__dirname+'/public'));


app.get("/",function(req,res) {
    res.render("index");
})


const PORT = process.env.PORT;



app.listen(PORT,() => {
    console.log(`app is listening to port ${PORT}`);
})