const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ayushtest:ayushtest@cluster0.19ev0f7.mongodb.net/curdprojectt?retryWrites=true&w=majority&appName=Cluster0")
.then(function(){
    console.log("connected to mongodb");
})
.catch(function(err){
    console.log(err);
})

const userSchema = mongoose.Schema({
    username:String,
    email:String,
    imageurl:Buffer
})

module.exports = mongoose.model("user",userSchema)