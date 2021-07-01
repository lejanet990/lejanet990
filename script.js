//generate a Pledge//
var displayText = document.getElementById("pledgeText");
var button = document.getElementById
("generatePledge");

function displayMessage(){
  var text = document.getElementById("userName").value;
  var state = document.getElementById("userState").value;
  console.log(text);
  console.log(state);
  displayText.innerHTML = "I, " + text +", pledge to help end food insecurity by either volunteering, spreading awareness, making a monetary donation, or by taking leadership and organizing a teaching garden in "+ state + "." ;
}

button.addEventListener("click", displayMessage);

//js for slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
