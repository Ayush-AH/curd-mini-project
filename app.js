const express = require("express")
const app = express()
const path = require("path")
const userModel = require("./models/user")

app.set("view engine","ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",function(req,res){
    res.render("index")
})
app.post("/create",async function(req,res){
    var {username,email,imageurl} = req.body
    var userdata = userModel.create({
        username,
        email,
        imageurl
    })
    res.redirect("/feed")
})

app.get("/feed",async function(req,res){
    var alluser = await userModel.find()
    res.render("feed",{alluser})
})

app.get("/edit/:id",async function(req,res){
    var user = await userModel.findOne({_id:req.params.id})
    res.render("edit",{user})
})

app.post("/edit/:id",async function(req,res){
    var {username,email,imageurl} = req.body
    var user = await userModel.findOneAndUpdate({_id:req.params.id},{username,email,imageurl})
    res.redirect("/feed")
})

app.get("/delete/:id",async function(req,res){
    var user = await userModel.findOneAndDelete({_id:req.params.id})
    res.redirect("/feed")
})

app.listen(3000)