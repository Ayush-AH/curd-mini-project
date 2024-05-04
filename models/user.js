const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/practicedatabase")


const userSchema = mongoose.Schema({
    username:String,
    email:String,
    imageurl:String
})

module.exports = mongoose.model("user",userSchema)