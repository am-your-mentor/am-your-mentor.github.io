// Consultado con Bard
// no funcionó

function agregarOpacidad() {
  // No es necesario opacar el aviso modal al iniciar la página.
}

const entendido = document.querySelector('.btn__confirm');
const cerrar = document.querySelector('.btn__cerrar');

const modal = document.querySelector('.modal');

cerrar.addEventListener('click', () => {
  modal.style.bottom = '-400px';
});

entendido.addEventListener('click', () => {
  guardarCookies();
});

const entendido_modal = document.querySelector('#confirm');

function cargarCookies() {
  if (localStorage.cookies == 'aceptada') {
    // No es necesario mostrar el modal si las cookies ya están aceptadas.
    return;
  }
}

function guardarCookies() {
  localStorage.cookies = 'aceptada';
  let expire = new Date(Date.now() + 776000000);
  document.cookie = `cookies=aceptada; expires=${expire.toUTCString()}`;
}

// No es necesario agregar la función agregarOpacidad() al evento onclick de entendido_modal.
entendido_modal.addEventListener('click', () => {
  guardarCookies();
});

// Eliminamos el código del segundo código que ya no es necesario.

document.addEventListener("DOMContentLoaded", function() {
  mostrarModal();
});