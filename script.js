const slides = document.querySelectorAll("#slider .slide");
const sliderButtons = document.querySelectorAll("#slider-nav .slider-button");

let currentSlide = 0;

// Add event listeners to slider buttons
sliderButtons.forEach(function(sliderButton) {
  sliderButton.addEventListener("click", function() {
    // Remove active class from all slider buttons
    sliderButtons.forEach(function(button) {
      button.classList.remove("active-button");
    });
    
    // Set active class to clicked button
    sliderButton.classList.add("active-button");
    
    // Hide current slide
    slides[currentSlide].classList.remove("active-slide");
    
    // Set currentSlide to index of clicked button
    currentSlide = parseInt(sliderButton.dataset.id);
    
    // Show new slide
    slides[currentSlide].classList.add("active-slide");
  });
});

// Show first slide and set active state to first button
slides[currentSlide].classList.add("active-slide");
sliderButtons[currentSlide].classList.add("active-button");