// Consultado con Bard
// no funciona correctamente 
// pero se acerca a lo requerido

function agregarOpacidad() {
    // document.body.style.opacity = "0.4";
  document.body.style.opacity = "0.6";

  }
  
  const modal = document.querySelector(".modal");
  const entendido = document.querySelector(".btn__confirm");
  const cerrar = document.querySelector(".btn__cerrar");
  
  function mostrarModal() {
    modal.style.display = "block";
    agregarOpacidad();
  }
  
  function ocultarModal() {
    modal.style.display = "none";
    document.body.style.opacity = "1";
  }
  
  window.addEventListener("load", mostrarModal);
  
  entendido.addEventListener("click", ocultarModal);
  cerrar.addEventListener("click", ocultarModal);

// dado en una segunda consulta, pero no funciona
// .modal-backdrop {
//    opacity: 0.5;
//  }


// Las partes innecesarias del código se eliminaron por las siguientes razones:

// La función cargarCookies() no es necesaria porque el modal se mostrará solo la primera vez que el usuario visite la página web.
// La variable entendido_modal no es necesaria porque el elemento de la página web que contiene el texto "He leído y aceptado los términos y condiciones" se puede seleccionar con la constante entendido.
// Los controladores de evento para los botones aceptarBtn, rechazarBtn y cerrarBtn no son necesarios porque el modal se ocultará cuando el usuario haga clic en cualquiera de los botones.
// El código final es más limpio y eficiente porque no contiene ninguna parte innecesaria.