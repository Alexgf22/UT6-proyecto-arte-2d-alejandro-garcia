const nextBtn = document.querySelector("#nextBtn");
const carouselImages = document.querySelector(".carousel-images");

let scrollLeft = 0;

nextBtn.addEventListener("click", () => {
  scrollLeft += carouselImages.offsetWidth;
  if (scrollLeft > carouselImages.scrollWidth) {
    scrollLeft = 0;
  }
  carouselImages.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });
});
