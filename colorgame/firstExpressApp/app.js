var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send("hello");
})

app.get('/hello', (req, res) =>{
    res.send("hellodfsfdfs");
    console.log("sdfsf");
})
app.get('/r/:subName', (req, res) => {
    res.send("subname");
    console.log("subname");
})

// useful for error page 
app.get("*", (req, res) =>{
    res.send("you are a star");
})

app.listen(4000, function(){
    console.log("sdfsf");
})