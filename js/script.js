// Obtener todos los elementos que deseas animar
const stock = document.querySelectorAll('.sec-stock');
const popular = document.querySelectorAll('.sec-popular');
const testimonios = document.querySelectorAll('.testimonios');
const contact = document.querySelectorAll('.contact');


// Función para verificar la posición de los elementos y mostrarlos si están en el viewport
function showElementsOnScroll() {
    stock.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
    popular.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
    testimonios.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
    contact.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Si el elemento está más abajo que la mitad de la ventana gráfica, mostrarlo
        if (elementTop < windowHeight / 2) {
            element.classList.add('visible');
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
            element.classList.remove('visible');
        }
    });
}


// Función para manejar la animación al hacer scroll
function handleScroll() {
    window.requestAnimationFrame(showElementsOnScroll);
}

// Agregar un listener para el evento scroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función una vez al cargar la página para verificar el estado inicial
showElementsOnScroll();
