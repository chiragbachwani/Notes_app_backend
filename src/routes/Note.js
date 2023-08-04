const express = require('express');
const router = express.Router();

const Note = require('./../models/Note');

router.post("/list/", async function (req,res){

        
    var notes =await Note.find({userid: req.body.userid});
    res.json(notes);
});

router.post("/add", async function (req,res){

    //is line se agar data exist kar ra hoga to woh update ho jayega
    await Note.deleteOne({nid: req.body.nid});

    const newNote = new Note({
        nid:req.body.nid,
    userid:req.body.userid,
    title:req.body.title,
    content:req.body.content
     });

    await newNote.save().then((value)=>{console.log("A");
res.send("New Note Created " + `by id: ${req.body.nid}`);
}).catch((err)=>{console.log(err)});

});

router.post("/delete", async function(req,res){
    await Note.deleteOne({nid: req.body.nid});
    const response1 = {message: "Note Deleted!"};
    res.json(response1);
});

module.exports = router;