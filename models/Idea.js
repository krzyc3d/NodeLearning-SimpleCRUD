const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//create Schema
const IdeaSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    details: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//Schema registaration
mongoose.model('ideas', IdeaSchema);