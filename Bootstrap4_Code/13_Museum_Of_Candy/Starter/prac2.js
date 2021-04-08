var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var score = document.querySelector("h1");
var input = document.querySelector("input").value;
var getInput = document.querySelector("input");
var ps1 = document.getElementById("ps1");
var ps2 = document.getElementById("ps2");
var num = document.getElementById('num');

var pOneScore = 0;
var pTwoScore = 0;

p1.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    if (pOneScore >= input){
        if(pTwoScore != input){
            ps1.classList.add("green");
            return;
        }
        return;
    }
    pOneScore++;
    ps1.textContent = pOneScore
})

p2.addEventListener('click', function(){
    var input = document.querySelector("input").value;

    if (pTwoScore >= input){
        if(pOneScore != input){
            ps2.classList.add("green");
            return;
        }
        return;
    }
    pTwoScore++;
    ps2.textContent = pTwoScore;
})

reset.addEventListener('click', function(){
    pOneScore = 0;
    pTwoScore = 0;
    ps2.textContent = pTwoScore;
    ps1.textContent = pOneScore
    ps1.classList.remove("green");
    ps2.classList.remove('green');
})

getInput.addEventListener('change', function(){
    var input = document.querySelector("input").value;
    num.textContent = input;
})