document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.service', { delay: 500 });
  ScrollReveal().reveal('.about-us', { delay: 500 });
  ScrollReveal().reveal('.contact-us', { delay: 500 });