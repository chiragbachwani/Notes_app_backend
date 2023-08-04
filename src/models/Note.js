// Steps for making Mongoose model:
// 1. Define Schema -> Note: id,userid , title , content, date added
//2. Create model -> <model name>,<Schema> Note

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    nid:{
        type: String,
        unique: true,
        required: true
    },
    userid:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
    },
    dateadded:{
        type:Date,
        default:Date.now
    },
});

module.exports =mongoose.models.notes || mongoose.model("Note",noteSchema);