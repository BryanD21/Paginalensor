// Asegúrate de incluir jQuery en tu página antes de agregar este código

$(document).ready(function() {
    // Desplazamiento suave al hacer clic en los enlaces del encabezado
    $('nav a, .scroll-link').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
  
        const hash = this.hash;
  
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          600, // Duración de la animación en milisegundos
          function() {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  