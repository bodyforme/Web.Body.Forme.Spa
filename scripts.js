// Función para controlar el carrusel de servicios
let currentIndex = 0;
const services = document.querySelectorAll('.servicio');

function showService(index) {
    services.forEach(service => service.style.display = 'none');
    services[index].style.display = 'block';
}

function nextService() {
    currentIndex++;
    if (currentIndex >= services.length) {
        currentIndex = 0;
    }
    showService(currentIndex);
}

function prevService() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = services.length - 1;
    }
    showService(currentIndex);
}

// Configuración del carrusel de servicios
const interval =1100; // Cambio de servicio cada 3 segundos

function startCarousel() {
    setInterval(nextService, interval);
}

// Funciones para mostrar/ocultar secciones
function toggleVisibility(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Event listeners para los botones de carrusel
document.querySelector('.prev-btn').addEventListener('click', prevService);
document.querySelector('.next-btn').addEventListener('click', nextService);

// Iniciar carrusel automáticamente
startCarousel();
// Función para cambiar los slides en el carousel de servicios
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("servicio");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Mostrar política de cookies al cargar la página
window.onload = function() {
    const cookiesPolicy = document.getElementById('cookiesPolicy');
    cookiesPolicy.style.display = 'block';
};

// Función para aceptar cookies
function acceptCookies() {
    const cookiesPolicy = document.getElementById('cookiesPolicy');
    cookiesPolicy.style.display = 'none';
}
