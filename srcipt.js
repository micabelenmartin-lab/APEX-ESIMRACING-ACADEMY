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
const img1 = document.querySelector('.hero-img-1');
const img2 = document.querySelector('.hero-img-2');
let showingFirst = true;
 
setInterval(() => {
  if (showingFirst) {
    img1.style.opacity = '0';
    img2.style.opacity = '1';
  } else {
    img1.style.opacity = '1';
    img2.style.opacity = '0';
  }
  showingFirst = !showingFirst;
}, 4000);
 
