var express = require('express');
var app = express();

app.get('/', (req, res) =>{
    res.send("Hi, there, welcome to my assignment");
})

app.get('/speak/:animals', (req, res) =>{
    var animal = req.params.animals;
    if(animal === 'pig'){
        res.send("The pig says \'Oink\'");
    }
    if(animal === 'cow'){
        res.send("The cow says \'Moo\'");
    }
    if(animal === 'dog'){
        res.send("The dog says \'Woof Woof\'");
    }
})

app.get('/repeat/:word/:num', (req, res) =>{
    var word = req.params.word;
    var num = req.params.num;
    // res.send(function(){
    //     var text = "";
    //     for(var i = 0; i < parseInt(num); i++){
    //         text+=word;
    //     }
    //     return text;
    // })
    var text = "";
    for(var i = 0; i < parseInt(num); i++){
        text+=word + " ";
    }
    res.send(text);
})

app.listen(8000, function(){
    console.log('runs at 3000');
})