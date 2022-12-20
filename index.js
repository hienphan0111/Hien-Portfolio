const btnClose = document.getElementById('btn-close');
const menu = document.getElementById('menu');
const hbgMenu = document.querySelector('.hamberger');
const overlay = document.querySelector('.overlay');
const itemsMenuToggle = document.querySelectorAll('.menu > li');

const closeToggleMenu = () => {
  overlay.classList.add('hidden');
  menu.classList.remove('menu-toggle');
  btnClose.classList.add('hidden');
  hbgMenu.classList.remove('hidden');
};

btnClose.addEventListener('click', closeToggleMenu);

hbgMenu.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  hbgMenu.classList.add('hidden');
  btnClose.classList.remove('hidden');
  menu.classList.add('menu-toggle');
});

itemsMenuToggle.forEach((item) => {
  item.addEventListener('click', closeToggleMenu);
});
