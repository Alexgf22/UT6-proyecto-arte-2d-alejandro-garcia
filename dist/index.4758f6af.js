const carouselContainer = document.querySelector(".carousel-container");
const carouselDots = document.querySelectorAll(".dot");
let currentIndex = 0;
carouselDots.forEach((dot, index)=>{
    dot.addEventListener("click", ()=>{
        currentIndex = index;
        updateCarousel();
    });
});
function updateCarousel() {
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    carouselDots.forEach((dot)=>dot.classList.remove("active"));
    carouselDots[currentIndex].classList.add("active");
}
setInterval(()=>{
    currentIndex = (currentIndex + 1) % carouselDots.length;
    updateCarousel();
}, 5000);

//# sourceMappingURL=index.4758f6af.js.map
