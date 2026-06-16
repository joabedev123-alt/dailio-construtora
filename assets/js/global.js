// Nav scroll — sub-pages (fixed 60px threshold)
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, {passive: true});
