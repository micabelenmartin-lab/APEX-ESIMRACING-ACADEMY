// ── Scroll reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ── Hero image cycle ──
// img1 es la base fija (z-index 1), nunca se toca.
// img2 está encima (z-index 2) y alterna entre opacity 0 y 1.
const img2 = document.querySelector('.hero-img-2');
let img2Visible = false;

setInterval(() => {
  img2Visible = !img2Visible;
  img2.style.opacity = img2Visible ? '1' : '0';
}, 4000);
