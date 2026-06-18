// ── PRECARGA DE IMÁGENES ──
// Precargamos la imagen del casco para que el cambio en el hover del Hero sea instantáneo y no parpadee en blanco
const preloadHeroImage = new Image();
preloadHeroImage.src = 'HERO 2.jpg';

// ── SCROLL REVEAL (ANIMACIÓN AL SCONTRAR EN PANTALLA) ──
// Configuración del observador para detectar cuándo los elementos entran en el campo visual
const observerOptions = {
  root: null,       // Utiliza el viewport del navegador como referencia
  threshold: 0.12   // El elemento se activa cuando el 12% de su cuerpo es visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Añade la clase que dispara la animación CSS
      entry.target.classList.add('visible');
      // Deja de observar el elemento para mejorar el rendimiento una vez animado
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Inicializa el observador sobre cada sección o elemento que use la clase '.reveal'
document.querySelectorAll('.reveal').forEach(element => {
  observer.observe(element);
});
