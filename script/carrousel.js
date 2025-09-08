document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".carrossel-item");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function mostrarSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.remove("ativo");
      dots[idx].classList.remove("ativo");
    });
    slides[i].classList.add("ativo");
    dots[i].classList.add("ativo");
  }

  function proximoSlide() {
    index = (index + 1) % slides.length;
    mostrarSlide(index);
  }

  // Auto play a cada 5 segundos
  setInterval(proximoSlide, 5000);

  // Clique nos indicadores
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      mostrarSlide(index);
    });
  });
});
