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

/* Popup for detail project */

const pjBtn = document.querySelectorAll('.pj-btn');
const popup = document.querySelector('.popup');

const projects = [
  {
    name: 'Tonic',
    categories: ['Canopy', 'Back End Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot-Portfolio-1.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: '',
  },
  {
    name: 'Multi-Post Stories',
    categories: ['Fabebook', 'Full Stack Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot-Portfolio-2.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: '',
  },
  {
    name: 'Facebook 360',
    categories: ['Facebook', 'Full Stack Dev', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot-Portfolio-3.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: '',
  },
  {
    name: 'Uber Navigation',
    categories: ['Uber', 'Lead Developer', '2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featureImage: './image/Snapshoot-Portfolio-3.svg',
    technologies: ['HTML', 'CSS', 'Javascript', 'github', 'ruby', 'Bootstraps'],
    liveVersion: '',
    scource: '',
  },
];

function createList(arr) {
  const ctList = document.createElement('ul');
  arr.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = item;
    ctList.appendChild(li);
  });
  return ctList;
}

const renderPopup = (index) => {
  const {
    name, categories, description, featureImage 
  }
  = projects[index];
  const {
    technologies, liveVersion, scource
  }
  = projects[index];

  const catlog = createList(categories);
  const lang = createList(technologies);

  catlog.classList.add('p-meta');
  const ls = catlog.querySelectorAll('li');
  ls.forEach((item, index) => {
    const sp = document.createElement('span');
    sp.classList.add('dot');
    if (index > 0) {
      item.prepend(sp);
      item.classList.add('gray');
    } else {
      item.classList.add('type');
    }
  });

  const html = `
  <div class='pop-container'>
    <button id="close-popup"><i class="fa-solid fa-xmark"></i></button>
    <h2 class='pj-title'>${name}</h2>
    <ul class='meta'>${catlog.innerHTML}</ul>
    <img src=${featureImage} alt='featureImage' class="p-img" />
    <div class='p-bot'>
      <p class="p-des"> ${description} </p>
      <div>
        <ul class='langue p-lang'>
          ${lang.innerHTML}
        </ul>
        <hr class="p-hr">
        <div class="p-btn">
          <button class="btn" id="p-btn-see" href=${liveVersion}>See live <img src="./image/p-see-icon.svg"</button>
          <button class="btn" id="p-btn-source" href=${scource}>Source <i class="fa-brands fa-github"></i></button>
        </div>
      </div>
    </div>  
  </div>
`;
  popup.innerHTML = html;
};

pjBtn.forEach((item, index) => {
  item.addEventListener('click', () => {
    const pOverlay = document.querySelector('.p-overlay');
    const body = document.querySelector('body');

    renderPopup(index);
    popup.classList.remove('hidden');
    pOverlay.classList.remove('hidden');
    body.classList.add('p-body');
    const pCloseBtn = document.getElementById('close-popup');
    pCloseBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
      pOverlay.classList.add('hidden');
      body.classList.remove('p-body');
    });
  });
});
