const btn_entendido = document.querySelector('.btn__confirm');
const btn_cerrar = document.querySelector('.btn__cerrar');

const cont_modal = document.querySelector('.modal');
// btn_entendido.addEventListener('click', () => cont_modal.style.bottom = '-400px');
// btn_cerrar.addEventListener('click', () => cont_modal.style.bottom = '-400px');

// btn_entendido.addEventListener('click', () => {
//     cont_modal.style.bottom = '-400px'
// })

btn_cerrar.addEventListener('click', () => {
    cont_modal.style.bottom = '-400px'
})

(function comprobarCookies(){
    if (localStorage.cookies == 'true'){
        cont_modal.style.bottom = '-400px'
    }
})
()

function aceptarCookies(){
    localStorage.cookies = 'true'
    cont_modal.style.bottom = '-400px'

    let expire = new Date()
    // expire = new Date(expire.getTime() + 776000000)
    expire = new Date(expire.getTime() + 2000)
    document.cookies = 'cookies=aceptada; expire'+expire
}

// const entendido = document.querySelector('.btn_confirm');
// acep.addEventListener('click', () => {
//     aceptarCookies();
//     // comprobarCookies();
//     mod.style.visibility = 'hidden'
//     mod.style.opacity ='0'
// })

// const close_aviso = document.querySelector('.btn_cerrar');
// close_aviso.addEventListener('click', () => {
//     comprobarCookies();
// })


// When the user scrolls down 50px from the top of the document, resize the header's font size

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("header").style.fontSize = "30px";
//   } else {
//     document.getElementById("header").style.fontSize = "90px";
//   }
// }