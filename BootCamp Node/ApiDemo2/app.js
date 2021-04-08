// var request = require('request');
const rp = require('request-promise');
// var express = require('express');
// var app = express()

// request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
//     // eval(require('locus'));
//     if(!error && response.statusCode == 200){
//         var parsedData = JSON.parse(body);
//         // console.log(parsedData);
//         console.log(parsedData.name + ' lives in ' + parsedData.address.city);
//     }
// })

rp('https://jsonplaceholder.typicode.com/users/1')
.then((htmlString) => {
    console.log(htmlString);
}).catch((err) => {
    console.log("error occuredd", err)
});


// app.listen(3000, function(){
//     console.log('running on 3000');
// })