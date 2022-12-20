const btnClose = document.getElementById('btn-close');
const menu = document.getElementById('menu');
const hbgMenu = document.querySelector('.hamberger');
const overlay = document.querySelector('.overlay');
const itemsMenuToggle = document.querySelectorAll('.menu > li');
const popup = document.querySelector('.popup');

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

const projects = [
  {
    name: 'Tonic',
    catagories: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot Portfolio-1.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: ''
  },
  {
    name: 'Multi-Post Stories',
    catagories: ['Fabebook', 'Full Stack Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot Portfolio-2.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: ''
  },
  {
    name: 'Facebook 360',
    catagories: ['Facebook', 'Full Stack Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot Portfolio-3.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: ''
  },
  {
    name: 'Uber Navigation',
    catagories: ['Uber', 'Lead Developer', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot Portfolio-3.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: ''
  }
];


let html = `
  <div class='pop-container'>
    <h2 class='pj-title'>${projects[index].name}</h2>
    <ul class="meta">
      <li class="type">Canopy</li>
      <li class="catagories gray"><span class="dot"></span>Backend Dev</li>
      <li class="year gray"><span class="dot"></span>2015</li>
    </ul>
  </div>

`