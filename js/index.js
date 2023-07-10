let d = document
let body = d.body
let subscribe = d.querySelector('.subscribe')
let modal = d.querySelector('.modal')
let zakaz = d.querySelector('.zakaz')
let burger_menu = d.querySelector('.burger_menu')
let section_1 = d.querySelector('.section_1')
let otp_btn = d.querySelector('.otp_btn')
zakaz.onclick = () => {
    subscribe.style.display = 'flex'
    modal.style.display = 'grid'
    body.style.overflow = 'hidden'
}

otp_btn.onclick = () => {
    subscribe.style.display = 'none'
    modal.style.display = 'none'
    body.style.overflow = ''
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        subscribe.style.display = 'none'
        modal.style.display = 'none'
        body.style.overflow = '';

    }
});

burger_menu.onclick = () => {
    section_1.classList.toggle('open')
}

let i = 1;
for (let li of carousel.querySelectorAll('li')) {
    li.style.position = 'relative';
    li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
    i++;
}


let width = 536;
let count = 1;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

carousel.querySelector('.prev').onclick = function () {

    position += width * count;

    position = Math.min(position, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {

    position -= width * count;

    position = Math.max(position, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};



