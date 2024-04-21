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
// Función para enviar correos

window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  // Inicializar EmailJS con tu clave pública
  emailjs.init('D9brYC83E-6VeuSCB');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los datos del formulario
    const formData = new FormData(form);

    // Enviar el formulario con EmailJS
    emailjs.sendForm('service_zrmspr9', 'template_aurccim', form)
      .then(function() {
        console.log('Mensaje enviado con éxito');
        form.reset();
        enviarWhatsApp(formData);
      }, function(error) {
        console.error('Error al enviar el mensaje:', error);
      });
  });

});