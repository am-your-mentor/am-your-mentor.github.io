// Consultado con BAI 
// no funciona correctamente xq no oculta la opacidad al hacer click

function agregarOpacidad() { 
  document.body.style.opacity = "0.4"; 
}

const entendidoBtn = document.querySelector('.btn__confirm');
const cerrarBtn = document.querySelector('.btn__cerrar');
const modal = document.querySelector('.modal');

cerrarBtn.addEventListener('click', () => {
  modal.style.bottom ='-400px';
});

entendidoBtn.addEventListener('click', () => {
  modal.style.bottom ='-400px';
  guardarCookies();
});

function cargarCookies(){
  if (localStorage.cookies == 'aceptada'){
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
  }
}

function guardarCookies(){
  localStorage.cookies = 'aceptada';
  let expire = new Date(Date.now() + 776000000); 
  document.cookie = `cookies=aceptada; expires=${expire.toUTCString()}`;
}

agregarOpacidad();
cargarCookies();

const entendido_modal = document.querySelector('#confirm');
entendido_modal.addEventListener('click', () => {
  guardarCookies();
  modal.style.visibility = 'hidden';
  modal.style.opacity = '0';
});

// Se eliminan las constantes innecesarias aceptarBtn y rechazarBtn
// La constante fondo no se utiliza en este código, por lo que también se puede eliminar

// Se agrega la clase "opaco" al cuerpo del documento en lugar de crear un fondo opaco adicional
document.body.classList.add('opaco');

// Se elimina la función mostrarModal del segundo código porque ya se está agregando la opacidad con la función agregarOpacidad del primer código
// Por lo tanto, ya no es necesario agregar una función adicional para mostrar el modal

const cerrar = document.querySelector('.btn__cerrar');
cerrar.addEventListener('click', () => {
  modal.style.bottom ='-400px';
});

// Se cambia la constante aceptarBtn por entendidoBtn, ya que se está utilizando en el primer código
entendidoBtn.addEventListener('click', () => {
  modal.style.bottom ='-400px';
  guardarCookies();
});

// Se elimina la función ocultarModal y los eventListeners correspondientes de aceptarBtn, rechazarBtn y cerrarBtn
// Ya que no son necesarios después de los cambios realizados en el código