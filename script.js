let slideIndex = 0;
let textIndex = 0;

showSlides();
showTextSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 1000); 
}

function showTextSlides() {
  let slides = document.getElementsByClassName("text-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  textIndex++;
  if (textIndex > slides.length) {textIndex = 1}    
  slides[textIndex-1].style.display = "block";  
  setTimeout(showTextSlides, 1000); 
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

document.querySelector('.hamburger-menu').addEventListener('click', function() {
  console.log('Hamburger menu clicked');
  document.querySelector('.nav-links').classList.toggle('active');
});




