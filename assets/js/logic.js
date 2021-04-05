// Get the modal
let lightbox = document.getElementById("lightbox");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.getElementById("img01");
let modalImg = document.getElementById("modalImg");
img.onclick = function(){
  lightbox.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  lightbox.style.display = "none";
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
let plusSlides=(thisSlide)=> {
  showSlides(slideIndex += thisSlide);
}

// Thumbnail image controls
let currentSlide =(thisSlide)=> {
  showSlides(slideIndex = thisSlide);
}

//Slide change controls. 
function showSlides(thisSlide) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("slideImg"); //onclick of class of slideimg (added to each image in show), iterate forward:
  if (thisSlide > slides.length) {slideIndex = 1}
  if (thisSlide < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) { //Iterates over length of slide index, if it's larger than 0, iterate forward one.
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//Needs to wait for the other functions to fire.
