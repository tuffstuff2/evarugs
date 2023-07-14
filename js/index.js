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

d.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        subscribe.style.display = 'none'
        modal.style.display = 'none'
        body.style.overflow = '';

    }
});

burger_menu.onclick = () => {
    section_1.classList.toggle('open')
}


  AOS.init();


 



