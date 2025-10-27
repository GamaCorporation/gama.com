document.addEventListener('DOMContentLoaded', function() {    

  const initEquipeSlider = () => {
    const wrapper = document.querySelector('.equipe-wrapper');
    const grid = document.querySelector('.equipe-grid');
    grid.style.transition = 'transform 0.4s ease'; 
    const members = document.querySelectorAll('.membro');
    const prevBtn = document.querySelector('.equipe-btn.prev');
    const nextBtn = document.querySelector('.equipe-btn.next');
    
    if (!wrapper || !grid || members.length === 0) return;
    
    let currentIndex = 0;
    const gap = 25; // mesmo valor do CSS

  
    const getMemberWidths = () => Array.from(members).map(m => m.offsetWidth + gap);

   
    const updateSlider = () => {
        const widths = getMemberWidths();
        const translateX = -widths.slice(0, currentIndex).reduce((acc, w) => acc + w, 0);
        grid.style.transform = `translateX(${translateX}px)`;

     
        if (prevBtn) prevBtn.style.display = currentIndex > 0 ? 'flex' : 'none';
        if (nextBtn) nextBtn.style.display = currentIndex < members.length - 1 ? 'flex' : 'none';
    };
    
    // Navegação
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
          currentIndex--;
          updateSlider();
        }
      });
    }
    
    if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    const widths = getMemberWidths();
    const totalWidth = widths.reduce((acc, w) => acc + w, 0);
    const visibleWidth = wrapper.offsetWidth;
    const currentOffset = widths.slice(0, currentIndex + 1).reduce((acc, w) => acc + w, 0);
    
    if (currentOffset < totalWidth - visibleWidth) {
      currentIndex++;
    }
    updateSlider();
  });
}
    
    
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        currentIndex = 0;
        updateSlider();
      }, 250);
    });
    
   
    updateSlider();
    
    
    if (window.innerWidth > 992) {
      if (prevBtn) prevBtn.style.display = 'none';
      if (nextBtn) nextBtn.style.display = 'none';
    }
  };
  
  
  initEquipeSlider();
});


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.socials a');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      console.log('Link clicado:', this.href);
    });
  });

  // Verifica se o Font Awesome foi carregado
  const checkFontAwesome = setInterval(function() {
    if (window.FontAwesome) {
      console.log('Font Awesome carregado com sucesso!');
      clearInterval(checkFontAwesome);
    }
  }, 100);

  // Timeout caso não carregue
  setTimeout(function() {
    if (!window.FontAwesome) {
      console.warn('Font Awesome não carregado. Verifique o link ou adicione localmente.');
    }
  }, 3000);
});
