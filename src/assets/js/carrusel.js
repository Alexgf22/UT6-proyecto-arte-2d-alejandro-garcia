const carouselSlide = document.querySelector('.section-escenarios__contenedor-imagenes');
const carouselImages = document.querySelectorAll('.contenedor-imagenes__escenario');
const carouselDots = document.querySelectorAll('.puntos__punto');

// Inicializar valores
let counter = 1;
const slideWidth = carouselImages[0].clientWidth;

// Configurar el desplazamiento inicial
carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';

// Añadir los listeners de los puntos
carouselDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    counter = index + 1;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
    // Actualizar los puntos activos
    carouselDots.forEach(dot => {
      dot.classList.remove('activo');
    });
    dot.classList.add('activo');
  });
});

// Añadir el listener para el desplazamiento automático
setInterval(() => {
  counter++;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  carouselSlide.style.transform = 'translateX(' + (-slideWidth * counter) + 'px)';
  // Actualizar los puntos activos
  if (counter > carouselImages.length - 1) {
    counter = 0;
  }
  carouselDots.forEach(dot => {
    dot.classList.remove('activo');
  });
  carouselDots[counter].classList.add('activo');
}, 3000);
