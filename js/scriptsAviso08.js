// Consultado con Bard
// no funcionó

function agregarOpacidad() {
  // No es necesario opacar el aviso modal al iniciar la página.
}

const modal = document.querySelector(".modal");
const entendido = document.querySelector(".btn__confirm");
const cerrar = document.querySelector(".btn__cerrar");

function mostrarModal() {
  modal.style.display = "block";
}

function ocultarModal() {
  modal.style.display = "none";
}

window.addEventListener("load", mostrarModal);

entendido.addEventListener("click", ocultarModal);
cerrar.addEventListener("click", ocultarModal);