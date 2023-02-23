const carouselContainer = document.querySelector('.section-escenarios__contenedor-imagenes');
const carouselDots = document.querySelectorAll('.puntos__punto');
let currentIndex = 0;

carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  carouselDots.forEach(dot => dot.classList.remove('activo'));
  carouselDots[currentIndex].classList.add('activo');
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselDots.length;
  updateCarousel();
}, 5000);
