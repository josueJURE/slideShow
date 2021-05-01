
const slide = document.getElementById("slide");
const time = 3000;
var images = [];
var slideIndex = 0;
images[0] = "picture/michael-jordan.jpg";
images[1] = "picture/usain-bolt.jpg";
images[2] = "picture/zidane.jpg";

console.log(images)

function slideShow() {
  slide.src = images[slideIndex]
  if(slideIndex < images.length -1) {
    slideIndex++
  } else {
    slideIndex = 0;
  }

    setTimeout("slideShow()", time)
  }

window.onload=slideShow;
