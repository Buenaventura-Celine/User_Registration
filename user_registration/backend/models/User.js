const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:{type: String,},
    first_name:{type: String,},
    middle_name:{type: String,},
    address_one:{type: String,},
    address_two:{type: String,},
    postal_code:{type: String,},
    birthday:{type: String,}
});

module.exports = mongoose.model("User", User);