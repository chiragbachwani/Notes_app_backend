const express =  require('express');
const app = express();


const mongoose = require('mongoose');
const Note = require('./src/models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : false}));

app.use(bodyParser.json());
//true -> Nested Objects (Correct)
//false -> Nexted obsjects (Not Correct)
const mongoDBpath = "mongodb+srv://Deadshot:Notes1234@cluster0.jlqirzn.mongodb.net/notesdb";
mongoose.connect(mongoDBpath).then(function(){

    app.get("/", function(req,res){
        const response  ={message:"API WORKS"};
        res.json(response);
    });
    const noteRouter = require('./src/routes/Note')
    app.use('/notes',noteRouter);
});






//starting the server on a Post
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server started at PORT : " + PORT);
});