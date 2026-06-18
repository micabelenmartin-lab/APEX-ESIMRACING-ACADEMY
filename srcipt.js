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

// ── EFECTO DE PARPADEO CONTINUO FIJADO ──
const heroSection = document.querySelector('.hero');
const heroImg2 = document.querySelector('.hero-img-2');
let isMoving = false;

if (heroSection && heroImg2) {
  
  // Función para manejar el parpadeo de forma suave
  const handleMouseMove = () => {
    // Agregamos la clase que definimos en el CSS
    heroImg2.classList.add('is-visible');
    
    // Si ya hay un temporizador, no hacemos nada, dejamos que el CSS controle la fluidez
    // Si queremos el efecto "glitch" real, el JS solo debe "encender" la capa
    isMoving = true;
  };

  heroSection.addEventListener('mousemove', () => {
    heroImg2.classList.add('is-visible');
    
    // Reseteamos el "apagado" cada vez que detecta movimiento
    clearTimeout(heroSection.timer);
    heroSection.timer = setTimeout(() => {
      heroImg2.classList.remove('is-visible');
    }, 150); // Tiempo en milisegundos que se mantiene encendida la imagen 2
  });

  heroSection.addEventListener('mouseleave', () => {
    heroImg2.classList.remove('is-visible');
    clearTimeout(heroSection.timer);
  });
}
