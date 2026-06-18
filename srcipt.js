// Preprecarga de la segunda imagen del Hero para evitar parpadeos en el hover
const preloadHeroImage = new Image();
preloadHeroImage.src = 'HERO 2.jpg';

// Scroll reveal para animar elementos al entrar en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target); // Deja de observar una vez que ya es visible
    }
  });
}, { threshold: 0.12 });

// Inicializar el observador en todos los elementos con la clase .reveal
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
