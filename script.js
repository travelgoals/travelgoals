document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  
    // Hero Slider Functionality
    const heroSection = document.getElementById('hero');
    const heroImages = [
      'images/places/ocean.jpg',
      'images/places/mountains.jpg',
      'images/places/city.jpg'
    ];
    let currentImageIndex = 0;
    
    setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % heroImages.length;
      heroSection.style.backgroundImage = `url('${heroImages[currentImageIndex]}')`;
    }, 5000); // Change image every 5 seconds
  });
  