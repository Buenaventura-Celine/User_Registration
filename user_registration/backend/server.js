const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

mongoose.connect('mongodb://137.0.0.1:27017/users', {useNewUrlParser: true})

mongoose.connection.once('open', () =>{
    console.log("Mongodb connection established successfully")
})

const PORT = 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.listenerCount(PORT, () =>{
    console.log("Server is running on port " + PORT)
})