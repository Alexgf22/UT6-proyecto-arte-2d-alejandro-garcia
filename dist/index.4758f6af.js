const grande = document.querySelector(".carrusel-escenarios__contenedor");
const punto = document.querySelectorAll(".puntos__punto");
// Cuando se hace click en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// Quitar la clase activo de todos los puntos
// Añadir la clase activo al punto que hemos hecho click
// Recorrer todos los punto
punto.forEach((cadaPunto, i)=>{
    // Asignamos un click a cadaPunto
    punto[i].addEventListener("click", ()=>{
        // Guardar la posición de ese punto
        let posicion = i;
        // Calculando el espacio que debe desplazarse el grande
        let operacion = posicion * -25;
        // Movemos el grande
        grande.style.transform = `translateX(${operacion}%)`;
        // Recorremos todos los punto
        punto.forEach((cadaPunto, i)=>{
            // Quitamos la clase activo a todos los punto
            punto[i].classList.remove("activo");
        });
        //Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add("activo");
    });
});

//# sourceMappingURL=index.4758f6af.js.map
