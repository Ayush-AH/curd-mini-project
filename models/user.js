const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://ayushtest:ayushtest@cluster0.y6lpkpw.mongodb.net/curdprojectt?retryWrites=true&w=majority&appName=Cluster0")
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