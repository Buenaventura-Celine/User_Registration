const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:{
        type: String,
    }
});

module.exports = mongoose.model("User", User);