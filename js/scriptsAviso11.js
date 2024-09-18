function agregarOpacidad() {
  // document.body.style.opacity = "0.4";
document.body.style.opacity = "0.6";
}

// Obtener los elementos del DOM
const modal = document.querySelector(".actions");
const aceptarBtn = document.getElementById(".btn_confirm");
// const rechazarBtn = document.getElementById("rechazar");
const cerrarBtn = document.getElementById(".btn_cerrar");
const fondo = document.querySelector(".content");

// Función para mostrar el modal y opacar el fondo
function mostrarModal() {
modal.style.display = "block";
// agregarOpacidad();
fondo.classList.add("opaco");
}

// Función para ocultar el modal y quitar la opacidad del fondo
function ocultarModal() {
modal.style.display = "none";
// document.body.style.opacity = "1";
fondo.classList.remove("opaco");
}

// Event listener para mostrar el modal al cargar la página
window.addEventListener("load", mostrarModal);

// Event listeners para los botones de aceptar, rechazar y cerrar
aceptarBtn.addEventListener("click", ocultarModal);
// rechazarBtn.addEventListener("click", ocultarModal);
cerrarBtn.addEventListener("click", ocultarModal);