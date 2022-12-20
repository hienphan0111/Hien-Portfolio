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


const projects = [
    {
        name: 'Tonic',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featureImage: "./image/pr1.png",
        technologies: ['html', 'css', 'javascript'],
        liveVersion: '',
        resource: ''
    },
    {
        name: 'Multi-Post Stories',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featureImage: "./image/pr1.png",
        technologies: ['html', 'css', 'javascript'],
        liveVersion: '',
        resource: ''
    },
    {
        name: 'Facebook 360',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        featureImage: "./image/pr1.png",
        technologies: ['html', 'css', 'javascript'],
        liveVersion: '',
        resource: ''
    }
]
const _renderPopup = (event, pjIndex) => {
    const { name,  description } = projects[pjIndex];
    let html = `
    <div class='model-container'>
        <h1>${ name }</h1>
        <p>${ description }</p>
    </div> `;
    popup.insertAdjacentHTML('afterend', html);
}
if(btn.length > 1){
    btn.forEach((item,index)=>{
        item.addEventListener('click', (event)=>{
        const { name,  description } = projects[index];
        let html = `
            <div class='model-container'>
            <h1>${ name }</h1>
            <p>${ description }</p>
            </div> `;
            popup.innerHTML = html;
        });
    });
}
