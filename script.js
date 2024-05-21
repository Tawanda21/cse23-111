// JavaScript for image slideshow functionality
let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow")[0].children;
const slideWidth = slides[0].offsetWidth; // Get the width of each slide

function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transition = "transform 0.5s ease";
        slides[i].style.transform = `translateX(${-slideWidth * index}px)`; // Adjust transform value
    }
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

function previousSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
}

// JavaScript for search functionality
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = document.getElementById("searchInput").value;
    alert("You searched for: " + searchTerm);
});

// JavaScript for slideshow buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);

// Initial call to showSlide to set the initial position of slides
showSlide(slideIndex);
