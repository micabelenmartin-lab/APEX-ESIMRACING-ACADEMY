// 1. Scroll reveal (Mantiene tu lógica original intacta)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// 2. Efecto de interacción Hero
const heroSection = document.querySelector('.hero');
const heroImg2 = document.querySelector('.hero-img-2');

if (heroSection && heroImg2) {
    // Usamos 'mouseenter' y 'mouseleave' para una detección más limpia
    heroSection.addEventListener('mouseenter', () => {
        heroImg2.style.opacity = '1';
    });

    heroSection.addEventListener('mouseleave', () => {
        heroImg2.style.opacity = '0';
    });

    // Si quieres un efecto de parpadeo aleatorio, podrías añadir esto:
    heroSection.addEventListener('mousemove', () => {
        // Solo un pequeño ajuste para asegurar que siga visible
        if (heroImg2.style.opacity === '0') {
            heroImg2.style.opacity = '1';
        }
    });
}
