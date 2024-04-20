// Función para mostrar u ocultar el botón de ir arriba dependiendo de la posición de desplazamiento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("goTopBtn").style.display = "block";
  } else {
    document.getElementById("goTopBtn").style.display = "none";
  }
}

// Función para ir arriba cuando se hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para otros navegadores
}
