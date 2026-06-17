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

// Lightbox para imagens do portfólio
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');

if (lightbox && lightboxImg && lightboxClose) {
  let currentGroup = [];
  let currentIndex = 0;

  // Abrir lightbox ao clicar nas imagens
  document.querySelectorAll('.carousel-track').forEach(track => {
    const imgs = Array.from(track.querySelectorAll('img'));
    imgs.forEach((img, index) => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        currentGroup = imgs;
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });
  });

  const updateImage = () => {
    if (currentGroup.length > 0) {
      lightboxImg.src = currentGroup[currentIndex].src;
    }
  };

  if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentGroup.length - 1;
      updateImage();
    });
  }

  if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex < currentGroup.length - 1) ? currentIndex + 1 : 0;
      updateImage();
    });
  }

  // Fechar no botão X
  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Fechar ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Teclado (ESC e Setas)
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') lightbox.style.display = 'none';
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentGroup.length - 1;
        updateImage();
      }
      if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex < currentGroup.length - 1) ? currentIndex + 1 : 0;
        updateImage();
      }
    }
  });
}
