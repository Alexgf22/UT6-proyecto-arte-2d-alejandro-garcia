let indiceEscenario = 1;
showSlides(indiceEscenario);
// Next/previous controls
function plusSlides(n) {
    showSlides(indiceEscenario += n);
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides(indiceEscenario = n);
}
function showSlides(n) {
    let i;
    let escenarios = document.getElementsByClassName("contenedor-imagenes__escenario");
    let puntos = document.getElementsByClassName("puntos__punto");
    if (n > escenarios.length) indiceEscenario = 1;
    if (n < 1) indiceEscenario = escenarios.length;
    for(i = 0; i < escenarios.length; i++)escenarios[i].style.display = "none";
    for(i = 0; i < puntos.length; i++)puntos[i].className = puntos[i].className.replace(" active", "");
    escenarios[indiceEscenario - 1].style.display = "block";
    puntos[indiceEscenario - 1].className += " active";
}

//# sourceMappingURL=index.4758f6af.js.map
