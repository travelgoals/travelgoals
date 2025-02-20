document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Hero Slider Functionality
  const heroSection = document.getElementById("hero");
  const heroImages = [
    "images/hero/hero1.jpg",
    "images/hero/hero2.jpg",
    "images/hero/hero3.jpg"
  ];
  let currentHeroIndex = 0;

  setInterval(() => {
    currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
    heroSection.style.backgroundImage = `url('${heroImages[currentHeroIndex]}')`;
  }, 5000); // Change image every 5 seconds
});
