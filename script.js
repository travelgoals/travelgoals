document.addEventListener('DOMContentLoaded', function() {
  // Toggle mobile navigation
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  
  hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Hero slider functionality
  const heroSection = document.getElementById('hero');
  const heroImages = [
    'images/hero/hero1.jpg',
    'images/hero/hero2.jpg',
    'images/hero/hero3.jpg'
  ];
  let currentSlide = 0;
  
  // Preload images for smoother transitions
  heroImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
  
  setInterval(function() {
    currentSlide = (currentSlide + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url(${heroImages[currentSlide]})`;
  }, 5000); // Change image every 5 seconds
  
  // Optional: smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
