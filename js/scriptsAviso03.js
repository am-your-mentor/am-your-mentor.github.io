// ultima sugerencia de ChaGPT

function mostrarModal() {
    var modal = document.querySelector('.modal');
    var overlay = document.querySelector('.overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
    overlay.style.opacity = '0.4';
    modal.style.zIndex = "1000";
  }
  
  function ocultarModal() {
    var modal = document.querySelector('.modal');
    var overlay = document.querySelector('.overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
  }
  
  function cargarCookies() {
    if (localStorage.cookies == 'aceptada') {
      ocultarModal();
    } else {
      mostrarModal();
    }
  }
  
  function guardarCookies() {
    localStorage.cookies = 'aceptada';
    let expire = new Date(Date.now() + 776000000); 
    document.cookie = `cookies=aceptada; expires=${expire.toUTCString()}`;
  }
  
  const entendido_modal = document.querySelector('#confirm');
  const cerrar_modal = document.querySelector('#cerrar');
  const overlay = document.querySelector('.overlay');
  
  entendido_modal.addEventListener('click', () => {
    guardarCookies();
    ocultarModal();
  });
  
  cerrar_modal.addEventListener('click', () => {
    ocultarModal();
  });
  
  cargarCookies();  