const grande = document.querySelector(".carrousel__grande");
const punto = document.querySelector(".puntos__punto");
// Cuando se hace click en punto
// Saber la posición de ese punto
// Aplicar un transform translateX al grande
// Quitar la clase puntos__activo de todos los puntos
// Añadir la clase puntos__activo al punto que hemos hecho click
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
            // Quitamos la clase puntos__activo a todos los punto
            punto[i].classList.remove("puntos__activo");
        });
        //Añadir la clase activo en el punto que hemos hecho click
        punto[i].classList.add("puntos__activo");
    });
});

//# sourceMappingURL=index.21b21bb6.js.map
