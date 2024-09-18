// Consultado con BAI
// no funcionó

// se debe agregar al HTML 
// body {
//    opacity: 1;
//  }

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
