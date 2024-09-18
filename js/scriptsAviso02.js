const entendido = document.querySelector('.btn__confirm')
const cerrar = document.querySelector('.btn__cerrar')

const modal = document.querySelector('.modal');

cerrar.addEventListener('click', () => modal.style.bottom ='-200px')
entendido.addEventListener('click', () => modal.style.bottom ='-200px');

const entendido_modal = document.querySelector('#confirm');

(function entendidoCookies(){
    if (localStorage.cookies == 'true'){
        entendido.style.bottom = '-200px'
        }
})
entendidoCookies();

function aceptadoCookies(){
    localStorage.cookies = 'true'
    entendido.style.bottom = '-200px'

    let expire = new Date()
    expire = new Date(expire.getTime() + 776000000)
    document.cookies = 'cookies=aceptada; expire'+expire
}

entendido_modal.addEventListener('click', () => {
    entendidoCookies();
    aceptadoCookies();
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
})