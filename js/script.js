// funcionamiento del carrusel
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.carousel-container img');
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 4000); // cambia imagen cada 4 segundos
}

function prevSlide() {
    const slides = document.querySelectorAll('.carousel-container img');
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlides();
}

function nextSlide() {
    const slides = document.querySelectorAll('.carousel-container img');
    slideIndex = (slideIndex + 1) % slides.length;
    showSlides();
}

// validaciony reseteo de la pagina de contactos
document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === "" || email === "" || message === "") {
        alert('Por favor, completa todos los campos.');
        return;
    }
    
    alert('Formulario enviado exitosamente!');
    
    // resetear el formulario despues de la alerta
    document.getElementById('contactForm').reset();
});
