// Nav scroll — homepage (triggers after hero section)
const nav = document.querySelector('nav');
const hero = document.querySelector('#hero');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > hero.offsetHeight - 80);
}, {passive: true});

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// Portfolio filters (visual only)
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Nav active link on scroll
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  links.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}, {passive: true});
