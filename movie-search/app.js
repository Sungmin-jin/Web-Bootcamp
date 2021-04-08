var express = require('express');
var app = express();
var request = require('request');


app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('search');
})

app.get('/results', (req, res) =>{
    console.log(req.query.search);
    const url = `http://www.omdbapi.com/?s=${req.query.search}&apikey=thewdb`
    request(url, (err, response, body) =>{
        if(!err && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data : data});
        }
    })
});

app.listen(5000, function(){
    console.log("running on port 5000"); 
})