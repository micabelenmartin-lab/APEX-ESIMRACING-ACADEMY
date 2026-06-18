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


// ── EFECTO DE PARPADEO CONTINUO FIJADO (WINDOW TRACKING) ──
const heroSection = document.querySelector('.hero');
const heroImg2 = document.querySelector('.hero-img-2');
let glitchTimeout;

if (heroSection && heroImg2) {
  // Esta es la función que hace parpadear la imagen de forma caótica
  const triggerGlitch = () => {
    if (Math.random() > 0.35) { // Un poquito más sensible para mejor respuesta
      heroImg2.classList.add('active');
    } else {
      heroImg2.classList.remove('active');
    }

    // Limpia el temporizador para que no se corte el efecto mientras te sigas moviendo
    clearTimeout(glitchTimeout);

    // Si frenás el mouse por completo dentro del hero, se apaga la imagen glitch
    glitchTimeout = setTimeout(() => {
      heroImg2.classList.remove('active');
    }, 150);
  };

  // Cuando el cursor entra al área del Hero, empezamos a escuchar en TODA la ventana
  heroSection.addEventListener('mouseenter', () => {
    window.addEventListener('mousemove', triggerGlitch);
  });

  // Cuando el cursor sale por completo del Hero, limpiamos los escuchas y apagamos el glitch
  heroSection.addEventListener('mouseleave', () => {
    window.removeEventListener('mousemove', triggerGlitch);
    clearTimeout(glitchTimeout);
    heroImg2.classList.remove('active');
  });
}
