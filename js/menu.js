const hamburguesa = document.querySelector('.menu-hamburguesa'),
     menu = document.querySelector('.menu-de-navegacion');

hamburguesa.addEventListener('click',() => {
    menu.classList.toggle('spread');
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguesa){
        menu.classList.toggle('spread');
    }
})

