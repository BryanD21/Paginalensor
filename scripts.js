$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('.menu').toggleClass('active');
  });

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }
  });
});

$('.menu a').click(function() {
  $('.menu').removeClass('active');
});

$(document).click(function(event) {
  if (!$(event.target).closest('.menu-toggle').length && !$(event.target).closest('.menu').length) {
    $('.menu').removeClass('active');
  }
});




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