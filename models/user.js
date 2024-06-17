const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ayushahirwar6673:1rfP4qhZAKE78NP3@cluster0.3mtk3nu.mongodb.net/CURDproject?retryWrites=true&w=majority&appName=Cluster0")
.then(function(){
    console.log("connected to mongodb");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    imageurl:String
})

module.exports = mongoose.model("user",userSchema)