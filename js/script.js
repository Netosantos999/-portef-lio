// Initialize AOS
AOS.init({ once: true, offset: 80, duration: 800 });

// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize Swiper
new Swiper(".mySwiper", {
  slidesPerView: 1, spaceBetween: 20, loop: true,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
});

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => menu.classList.toggle('hidden'));
    document.querySelectorAll('#menu a').forEach(link => link.addEventListener('click', () => menu.classList.add('hidden')));
}

// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');

function openLightbox(element) {
  const img = element.querySelector('img');
  if(img && lightbox && lightboxImg) { 
      lightboxImg.src = img.src; 
      lightbox.style.display = 'flex'; 
      setTimeout(() => lightbox.style.opacity = '1', 10); 
  }
}

function closeLightbox() { 
    if (lightbox) {
        lightbox.style.opacity = '0'; 
        setTimeout(() => lightbox.style.display = 'none', 300); 
    }
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
}
