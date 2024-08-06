// Get the socialBox
var twitterBox = document.getElementById("twitterBox");

// When the user scrolls the page, execute myFunction
twitterBox.onmouseover = function() {changeImgColors()};

var twitterImg = document.getElementById("twitterAcc");

// Change our image to a different color!
function changeImgColors() {
  twitterImg.src='./files/logo-black.png';
}

twitterBox.onmouseout = function() {changeImgBack()};

// change it back!
function changeImgBack() {
  twitterImg.src='./files/logo-white.png';
}