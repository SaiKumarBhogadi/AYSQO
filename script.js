document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.is-nav-toggle');
    const navMenu = document.querySelector('.is-nav-menu');

    toggleButton.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.is-banner-slide');
    const dots = document.querySelectorAll('.is-banner-dot');
    const prevBtn = document.querySelector('.is-banner-prev');
    const nextBtn = document.querySelector('.is-banner-next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
        });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextSlide, 5000);

    // Reset auto slide on user interaction
    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 5000);
    }

    // Event listeners for navigation
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            resetAutoSlide();
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.is-tech-tab');
    const tabContents = document.querySelectorAll('.is-tech-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.is-testimonials-wrapper');
    const cards = document.querySelectorAll('.is-testimonial-card');
    const dotsContainer = document.querySelector('.is-testimonials-dots');
    let currentIndex = 0;
    const totalCards = cards.length;

    // Function to calculate cards per view based on screen size
    function getCardsPerView() {
        return window.innerWidth <= 768 ? 1 : 2; // 1 card on mobile, 2 on larger screens
    }

    let cardsPerView = getCardsPerView();
    let totalSlides = Math.ceil(totalCards / cardsPerView);

    // Dynamically generate dots based on the number of slides
    function generateDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        totalSlides = Math.ceil(totalCards / cardsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('is-testimonial-dot');
            if (i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
        }
    }

    // Initial dot generation
    generateDots();

    function showSlide(index) {
        // Ensure the index stays within bounds
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }

        // Calculate the transform percentage based on cards per view
        const translateX = -(currentIndex * (100 / cardsPerView));
        wrapper.style.transform = `translateX(${translateX}%)`;

        // Update active dot
        const dots = document.querySelectorAll('.is-testimonial-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Event listeners for dots
    function setupDotListeners() {
        const dots = document.querySelectorAll('.is-testimonial-dot');
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
            });
        });
    }

    // Initial setup
    setupDotListeners();

    // Auto-slide every 5 seconds
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000);

    // Handle window resize to adjust cards per view
    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            cardsPerView = newCardsPerView;
            generateDots(); // Regenerate dots based on new cards per view
            setupDotListeners(); // Reattach event listeners
            showSlide(currentIndex); // Recalculate slide position on resize
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    const serviceLinks = document.querySelectorAll('.sv-service-link');
    const serviceContents = document.querySelectorAll('.sv-service');

    serviceLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove active class from all links and contents
            serviceLinks.forEach(link => link.classList.remove('active'));
            serviceContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked link and corresponding content
            this.classList.add('active');
            const serviceId = this.getAttribute('data-service');
            document.getElementById(serviceId).classList.add('active');
        });
    });
});



// solutions 
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.about-solutions-filter-btn');
    const cards = document.querySelectorAll('.about-solutions-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            cards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});




// technoloiges page
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.tech-technologies-filter-btn');
    const items = document.querySelectorAll('.tech-technologies-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            items.forEach(item => {
                if (filterValue === 'all') {
                    item.style.display = 'block';
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
});