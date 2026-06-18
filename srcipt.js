// Scroll reveal (Mantiene tu lógica original intacta)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// ── EFECTO DE PARPADEO CONTINUO AL MOVER EL MOUSE ──
// Controla el cambio de imágenes sin necesidad de salir al borde de la página

const heroSection = document.querySelector('.hero');
const heroImg2 = document.querySelector('.hero-img-2');
let glitchTimeout;

if (heroSection && heroImg2) {
  heroSection.addEventListener('mousemove', () => {
    // Genera un parpadeo caótico y asincrónico basado en el movimiento real del cursor
    if (Math.random() > 0.4) {
      heroImg2.classList.add('active');
    } else {
      heroImg2.classList.remove('active');
    }

    // Limpia el temporizador anterior para que no se corte el efecto mientras te muevas
    clearTimeout(glitchTimeout);

    // Cuando el cursor se frena por completo, la imagen vuelve a su estado normal (oculta)
    glitchTimeout = setTimeout(() => {
      heroImg2.classList.remove('active');
    }, 120); // Tiempo de respuesta en milisegundos tras detener el mouse
  });

  // Si el cursor abandona la sección hero, nos aseguramos de apagar la imagen 2 de inmediato
  heroSection.addEventListener('mouseleave', () => {
    heroImg2.classList.remove('active');
  });
}
