var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) =>{
    res.render('home');
});

app.get("/fallinginlovewith/:thing", (req, res) =>{
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
})

app.get('/posts', (req, res) =>{
    var posts = [
        {title: "Post 1,", author: "Susy"},
        {title: "Post 2,", author: "Kaisa"},
        {title: "Post 3,", author: "Jax"}
    ];

    res.render("posts", {posts: posts});
})

app.listen(4000, function(){
    console.log('running on 4000');
});