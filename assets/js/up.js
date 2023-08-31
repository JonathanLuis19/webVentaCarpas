window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.pageYOffset > 300) { // Mostrar el botón después de desplazarse 300 píxeles
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplazar suavemente hacia arriba
  });
  