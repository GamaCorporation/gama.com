// menu.js - Controle do menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuOverlay = document.querySelector('.menu-overlay');
  const navbar = document.querySelector('.navbar');
  
  // Menu toggle
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
      document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  // Fechar menu ao clicar no overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function() {
      navbar.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  // Fechar menu ao clicar em um link
  document.querySelectorAll('.navbar nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      navbar.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});