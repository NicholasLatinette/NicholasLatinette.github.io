// Get the socialBox
var socialBox = document.getElementById("inBox");

// When the user scrolls the page, execute myFunction
socialBox.onmouseover = function() {changeInImgColors()};

var imgElement = document.getElementById("linkedinAcc");

// Change our image to a different color!
function changeInImgColors() {
  imgElement.src='./files/In-Blue-40.png';
}

socialBox.onmouseout = function() {changeInImgBack()};

// change it back!
function changeInImgBack() {
    imgElement.src='./files/In-White-40@2x.png';
}