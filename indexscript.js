document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchBar = document.querySelector('.search-bar');
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const searchInput = searchBar.querySelector('input');
    const searchButton = searchBar.querySelector('button');

    searchIcon.addEventListener('click', function() {
        searchIcon.classList.toggle('active'); // Toggle the active class
    });

    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('open'); // Toggle the open class for menu icon
        dropdownMenu.classList.toggle('open'); // Toggle the open class for dropdown menu
    });

    // Keep the dropdown menu open when the cursor is inside it
    dropdownMenu.addEventListener('mouseenter', function() {
        menuIcon.classList.add('open');
        dropdownMenu.classList.add('open');
    });

    dropdownMenu.addEventListener('mouseleave', function() {
        menuIcon.classList.remove('open');
        dropdownMenu.classList.remove('open');
    });

    // Close search bar when clicking outside or clicking the search button
    document.addEventListener('click', function(event) {
        const isClickInsideSearchBar = searchBar.contains(event.target);
        const isClickOnSearchIcon = searchIcon.contains(event.target);
        if (!isClickInsideSearchBar && !isClickOnSearchIcon) {
            searchIcon.classList.remove('active'); // Close search bar
        }
    });

    // Prevent closing search bar when clicking inside search bar or on search button
    searchInput.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
    });

    searchButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        // Add logic for handling the search functionality here
        // For example, submit the search query to a server or perform client-side search
        // After handling the search, you may choose to close the search bar or keep it open
    });

    // Display and hide movie info on mouse enter and leave
    const movieImages = document.querySelectorAll('.foreground-images img');

    movieImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            const movieInfo = this.alt; // Get the movie information from alt attribute
            displayMovieInfo(movieInfo); // Call function to display movie info
        });

        img.addEventListener('mouseleave', function() {
            hideMovieInfo(); // Call function to hide movie info when cursor leaves image
        });
    });

    function displayMovieInfo(info) {
        // Create a div element to display movie info
        const infoDiv = document.createElement('div');
        infoDiv.className = 'movie-info';
        infoDiv.textContent = info;

        // Append the info div to the body or a specific container
        document.body.appendChild(infoDiv);
    }

    function hideMovieInfo() {
        // Remove the movie info div from the DOM
        const infoDiv = document.querySelector('.movie-info');
        if (infoDiv) {
            infoDiv.remove();
        }
    }

    $(document).ready(function () {
        const slides = $(".slides");
        const slideWidth = $(".slides img").width();
        let currentSlide = 0;
    
        $(".next-btn").click(function () {
            if (currentSlide < slides.children().length - 1) {
                currentSlide++;
                updateSlidePosition();
            }

            // Hide next button when reaching the last slide
            if (currentSlide === slides.children().length - 1) {
                $(this).hide();
            }
        });
    
        $(".prev-btn").click(function () {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlidePosition();
            }

            // Show next button if it was hidden
            $(".next-btn").show();
        });
    
        function updateSlidePosition() {
            slides.css("transform", `translateX(-${currentSlide * slideWidth}px)`);
        }
    });

    });
    
    $(document).ready(function () {
        const tvShowsSlides = $(".tv-shows-slides");
        const tvShowSlideWidth = $(".tv-shows-slides img").outerWidth(true);
        let currentTvShowSlide = 0;
    
        $(".tv-shows-next-btn").click(function () {
            if (currentTvShowSlide < tvShowsSlides.children().length - 1) {
                currentTvShowSlide++;
            } else {
                currentTvShowSlide = 0; // Reset to the first slide
            }
            updateTvShowSlidePosition();
        });
    
        $(".tv-shows-prev-btn").click(function () {
            if (currentTvShowSlide > 0) {
                currentTvShowSlide--;
            } else {
                currentTvShowSlide = tvShowsSlides.children().length - 1; // Go to the last slide
            }
            updateTvShowSlidePosition();
        });
    
        function updateTvShowSlidePosition() {
            tvShowsSlides.css("transform", `translateX(-${currentTvShowSlide * tvShowSlideWidth}px)`);
        }
    });


