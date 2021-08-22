const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User");
const { response } = require("express");

mongoose.connect('mongodb://127.0.0.1:27017/users', {useNewUrlParser: true});

mongoose.connection.once('open', () =>{
    console.log("Mongodb connection established successfully")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    User.find((err, users) =>{
        if(err){
            console.log(err);
        }else{
            res.json(users)
        }
    });
});

app.post("/create", (req, res) =>{
    const user = new User(req.body);
    user.save().then((user) =>{
        res .json(user);
    })
    .catch((err) => {
        res.status(500).send(err.message);
    });
});

app.get("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
        res.json(user);
    });
});

app.post("/:id", (req, res) => {
    const id = req.params.id;
    User.findById(id, (err, user) => {
      if(!user){
          res.status(404).send("User not found")
      }else{
        user.name = req.body.name
        user.first_name = req.body.first_name
        user.middle_name = req.body.middle_name
        user.address_one = req.body.address_one
        user.address_two = req.body.address_two
        user.postal_code = req.body.postal_code
        user.birthday = req.body.birthday
        user.gender = req.body.gender
        user.civil_status = req.body.civil_status
        user.nationality = req.body.nationality
        user.phone_number = req.body.phone_number
        user.email = req.body.email
        user.save().then(user => {
            res.json(user)
        }).catch(err => res.status(500).send(err.message));
      }
    });
});

app.delete('/:id', async (req, res) => {
    let id = req.params.id;
    let user;
    try {
      user = await User.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
    if (user) return res.json({ deleted: true });
    return res.json({ deleted: false });
});

app.listen(PORT, () =>{
    console.log("Server is running on port " + PORT)
})