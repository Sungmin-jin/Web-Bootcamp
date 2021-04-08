var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = [
    "hello", "hi", "banga"
];

app.use(bodyParser.urlencoded({
    extended: true
}));

// app.use(static('public'));
app.set("view engine", "ejs");

app.get("/", (req, res) =>{
    res.render("home");
})

app.post("/addfriend", (req, res) => {
    console.log(req.body.newFriend);
    var newFriend = req.body.newFriend;
    friends.push(newFriend);
    res.redirect("/friends");
})


app.get("/friends", (req, res) =>{
    res.render("friends", {friends: friends});
})



app.listen(8000, function(){
    console.log("running on port 8000 ^^");
})