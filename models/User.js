const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

//create Schema
const UserSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//Schema registaration
mongoose.model('users', UserSchema);