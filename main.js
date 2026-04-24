document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in cards on scroll
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        observer.observe(card);
    });


    // slider
    const track = document.querySelector(".slider-track");
    // const cards = document.querySelectorAll(".card");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let index = 0;
    let cardamount = window.innerWidth <= 768 ? 1 : 2;

    function updateSlider() {
        track.style.transform = `translateX(-${index * 50}%)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < cards.length - cardamount) {
            index++;
            updateSlider();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });

});