// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero image cycle
const img1 = document.querySelector('.hero-img-1');
const img2 = document.querySelector('.hero-img-2');
let img2Visible = false;

// Agregamos transition a img1 tambien para que el fade sea suave
img1.style.transition = 'opacity 0.8s ease';

setInterval(function() {
  img2Visible = !img2Visible;
  img1.style.opacity = img2Visible ? '0' : '1';
  img2.style.opacity = img2Visible ? '1' : '0';
}, 4000);
