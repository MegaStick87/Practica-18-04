// Agrega un escuchador de eventos para ejecutar el código una vez que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los elementos del DOM que representan los contenedores izquierdo y derecho del carrusel
    let slideRight = document.getElementById('slide-right');
    let slideLeft = document.getElementById('slide-left');

    // Determina el número de diapositivas en el contenedor izquierdo
    const numSlides = slideLeft.querySelectorAll('.slide').length;
    let indexRight = 0; // Índice inicial para el carrusel derecho
    let indexLeft = numSlides - 1;  // Inicia en la imagen superior para mover hacia abajo

    // Establece un intervalo para cambiar las diapositivas automáticamente cada 3 segundos
    setInterval(() => {
        // Mueve el texto hacia arriba en el carrusel derecho
        indexRight = (indexRight + 1) % numSlides; // Aumenta el índice derecho y lo envuelve si excede el número de diapositivas
        slideRight.style.transform = `translateY(-${indexRight * 100}vh)`; // Aplica la transformación para mover las diapositivas

        // Mueve las imágenes hacia abajo en el carrusel izquierdo
        indexLeft = (indexLeft - 1 + numSlides) % numSlides; // Disminuye el índice izquierdo y lo envuelve si es necesario
        slideLeft.style.transform = `translateY(-${indexLeft * 100}vh)`; // Aplica la transformación para mover las diapositivas
    }, 3000); // Intervalo de 3 segundos entre cada cambio automático de diapositivas
});
