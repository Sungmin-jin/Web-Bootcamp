var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var rgbTitle = document.querySelector(".rgb-title");
var pickedColor = pickColor();
var show = document.querySelector(".show");
var header = document.querySelector(".header");
var again = document.querySelector(".again");

rgbTitle.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener('click', function () {
        if (this.style.backgroundColor === pickedColor) {
            show.textContent = "Correct!"
            changeColors(pickedColor);
            header.style.backgroundColor = pickedColor;
            again.textContent = "Play Again?";
        } else {
            this.style.visibility = "hidden";
            // this.style.backgroundColor = "#232323";
            show.textContent = "Try Again"
        }
    })

}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.visibility = "visible";
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")");
    }

    return arr;
}


again.addEventListener('click', function(){
    show.textContent = " ";
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    again.textContent = "NEW COLOR";
    rgbTitle.textContent = pickedColor;
    header.style.backgroundColor = "#232323"
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.visibility = "visiblie";
        squares[i].style.backgroundColor = colors[i];
    }
})