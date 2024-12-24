const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }
    carouselItems.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
});

prevButton.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    }
    carouselItems.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentSlide) * 100}%)`;
    });
});
