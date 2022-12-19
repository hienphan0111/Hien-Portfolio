const btn_close = document.getElementById('btn-close');
const menu = document.getElementById('menu');
const hbgMenu = document.querySelector('.hamberger');
const overlay = document.querySelector('.overlay');
const itemsMenuToggle = document.querySelectorAll('.menu > li');

const closeToggleMenu = () => {
    overlay.classList.add('hidden');
    menu.classList.remove('menu-toggle');
    btn_close.classList.add('hidden');
    hbgMenu.classList.remove('hidden');
}

btn_close.addEventListener('click', closeToggleMenu);


hbgMenu.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    hbgMenu.classList.add('hidden');
    btn_close.classList.remove('hidden');
    menu.classList.add('menu-toggle');
})

itemsMenuToggle.forEach((item)=>{
    item.addEventListener('click', closeToggleMenu);
})
