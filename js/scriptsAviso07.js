// Consultado con BAI 
// no funciona correctamente xq no oculta la opacidad al hacer click

function agregarOpacidad() { 
  document.body.style.opacity = "0.4"; 
}

const entendido = document.querySelector('#entendido');
const cerrar = document.querySelector('.btn__cerrar');

const modal = document.querySelector('.modal');
const fondo = document.querySelector('.fondo');

// Se elimina el evento 'load' para mostrar el modal al cargar la página
// Se agrega directamente la función agregarOpacidad()
agregarOpacidad();

cerrar.addEventListener('click', () => {
  modal.style.bottom = '-400px';
  fondo.classList.remove('opaco'); // Se quita la opacidad al cerrar el modal
});

entendido.addEventListener('click', () => {
  modal.style.bottom = '-400px';
  guardarCookies();
});

// Se elimina la constante 'aceptarBtn', ya que no se usa en este nuevo código
// Se elimina la constante 'rechazarBtn', ya que no se necesita un botón 'rechazar'
// Se reemplaza la constante 'cerrarBtn' por 'cerrar' de la primera sección de código

function cargarCookies() {
  if (localStorage.cookies == 'aceptada') {
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    fondo.classList.remove('opaco');
  }
}

function guardarCookies() {
  localStorage.cookies = 'aceptada';
  let expire = new Date(Date.now() + 776000000); 
  document.cookie = `cookies=aceptada; expires=${expire.toUTCString()}`;
}

cargarCookies();

entendido_modal.addEventListener('click', () => {
  guardarCookies();
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
  fondo.classList.remove('opaco');
});

// cerrar.addEventListener('click', () => {
//  modal.style.bottom = '-400px';
//  fondo.classList.remove('opaco');
// });
