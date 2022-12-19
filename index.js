const btn_close = document.querySelector('.btn-close');
const menu = document.querySelector('.menu');
let isClick = false;

btn_close.addEventListener('click', function(event){
    if(isClick)
    {
        menu.classList.add('invisible');
        isClick = !isClick;
    }
    else {
        menu.classList.remove('invisible');
        isClick = !isClick;
    }
})
