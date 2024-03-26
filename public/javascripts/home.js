const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;

function showSlide(n) {
    slides.forEach((slide, index) => {
        if (index === n) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
const currentUrl = window.location.href;
const links = document.querySelectorAll('.topnav a');
links.forEach(link => {
if (link.href === currentUrl) {
link.classList.add('active');
}
});