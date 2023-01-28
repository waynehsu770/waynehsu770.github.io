// Contact Form Functions 
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// Close Contact Form by clicking off it
// First add event listener for any clicks on the site
document.addEventListener("click", function(event){
    // State that if click happens on the cancel button OR anywhere that is not on the form AND the click does not happen on any element
    // with the the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm();
    }
}, false )

// This displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    // This takes all the elements with the class name "mySlides" and stores them in the array "slides"
    var slides = document.getElementsByClassName("mySlides"); 
    // This takes all elements with the class name "dot" and stores them in the array "dots"
    var dots = document.getElementsByClassName("dot");
    // If n is greater than length of the array "slides", slideIndex is set to 1
    if (n > slides.length) {slideIndex = 1};
    // If n is less than 1, the slideIndex is set to length of the array "slides"
    if (n < 1) {slideIndex = slides.length};
    for (i = 0; i < slides.length; i++) {
        // This loop takes each item in the array "slides" and sets display to none
        slides[i].style.display = "none";
    }
    for ( i = 0; i < dots.length; i++) {
        // This loop takes each item in the array "dots" and removes "active" which removes the active styling
        dots[i].className = dots[i].className.replace(" active", "")
    }
    // This displays the image in the slideshow
    slides[slideIndex - 1].style.display = "block";
    // This adds the active styling to the dot associated with the image
    dots[slideIndex - 1].className += " active";
}