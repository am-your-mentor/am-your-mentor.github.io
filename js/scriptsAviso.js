// Consultado con ChatGPT

    // function agregarOpacidad() { // puesto por mi, funciona con agregarOpacidad() puesto abajo
    // document.body.style.background = "transparent"; // no funciona
    // document.body.style.opacity = "0.4"; // funciona
    // document.body.style.opacity = "rgba(250,250,250,250.4)"; // no funciona
// }

// ***las siguientes son dos pruebas y se usan colocando abajo agregarOpacidad(), pero al activarlas quitn la opacidad ;***
// var verModal = document.getElementById("#ver__modal");
// verModal.style.zIndex = "1000";
// verModal.style.zIndex = "6";

// function cerrarModal() {  // puesto por mi
	// document.getElementById("modal").style.display = "none";
// }

const entendido = document.querySelector('.btn__confirm')
const cerrar = document.querySelector('.btn__cerrar')

const modal = document.querySelector('.modal');

cerrar.addEventListener('click', () => {
    modal.style.bottom ='-400px';
});

entendido.addEventListener('click', () => {
    modal.style.bottom ='-400px';
    guardarCookies();
});

const entendido_modal = document.querySelector('#confirm');

function cargarCookies(){
    if (localStorage.cookies == 'aceptada'){
        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
    }
}

function guardarCookies(){
    localStorage.cookies = 'aceptada';
    let expire = new Date(Date.now() + 776000000); // 604800000 Una semana en milisegundos
    document.cookie = `cookies=aceptada; expires=${expire.toUTCString()}`;
}

agregarOpacidad();  // puesto por mi // funciona con function agregarOpacidad() puesto arriba

cargarCookies();

entendido_modal.addEventListener('click', () => {
    guardarCookies();
	// cerrarModal(); // puesto por mi
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
});