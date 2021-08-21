const mongoose = require("mongoose");

const Todo = mongoose.Schema({
    name:{
        type: String,
    }
});

module.exports = mongoose.model("User", User);