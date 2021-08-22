const mongoose = require("mongoose");

const User = mongoose.Schema({
    name:{type: String},
    first_name:{type: String},
    middle_name:{type: String},
    age:{type:String},
    birthday:{type: String},
    birthplace:{type: String},
    gender:{type: String},
    address_one:{type: String},
    address_two:{type: String},
    postal_code:{type: String},
    birthday:{type: String},
    civil_status:{type: String},
    nationality:{type: String},
    religion:{type: String},
    weight:{type: String},
    height:{type: String},
    mother_name:{type: String},
    father_name:{type: String},
    phone_number:{type: String},
    email:{type: String}
});

module.exports = mongoose.model("User", User);