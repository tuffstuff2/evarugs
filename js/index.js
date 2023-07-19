let d = document
let body = d.body
let subscribe = d.querySelector('.subscribe')
let modal = d.querySelector('.modal')
let zakaz = d.querySelector('.zakaz')
let burger_menu = d.querySelector('.burger_menu')
let section_1 = d.querySelector('.section_1')
let otp_btn = d.querySelector('.otp_btn')
let modal_close = d.querySelector('.modal_close')
let footer = d.querySelector('footer')
let section_3 = d.querySelector('.section_3')
let section_4 = d.querySelector('.section_4')
let con = d.querySelector('.con')
let what = d.querySelector('.what')
let otziv = d.querySelector('.otziv')
let sw_img = d.querySelector('.sw_img')
let sw_img1 = d.querySelector('.sw_img1')
let sw_img2 = d.querySelector('.sw_img2')

zakaz.onclick = () => {
    subscribe.style.display = 'flex'
    modal.style.display = 'grid'
    body.style.overflow = 'hidden'
}

modal_close.onclick = () => {
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


dragula([
    d.querySelector(".foot_grid"),

]);


// при смене ширины экрана выполняет действия работант как media //
window.onresize = () => {
    if (window.innerWidth <= 992 && window.innerWidth > 567) {
        sw_img.src = 'img/Mask Group11.png'
        sw_img1.src = 'img/Mask Group11.png'
        sw_img2.src = 'img/Mask Group11.png'
    } else if (window.innerWidth <= 567) {
        sw_img.src = 'img/Mask Group (1).png'
        sw_img1.src = 'img/Mask Group (1).png'
        sw_img2.src = 'img/Mask Group (1).png'
    } else {
        sw_img.src = 'img/Mask Group.png'
        sw_img1.src = 'img/Mask Group.png'
        sw_img2.src = 'img/Mask Group.png'
    }
}




// создаем и привязываем якорь //
let pos_foot = footer.offsetTop
let pos_foot_w = footer.offsetWidth
con.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: pos_foot, left: 0, behavior: 'smooth' })
})
let pos_sec3 = section_3.offsetTop
let pos_sec3_w = section_3.offsetWidth
what.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: pos_sec3, left: 0, behavior: 'smooth' })
})
let pos_sec4 = section_4.offsetTop
let pos_sec4_w = section_4.offsetWidth
otziv.addEventListener('click', (e) => {
    e.preventDefault()
    window.scrollTo({ top: pos_sec4 - 200, left: 0, behavior: 'smooth' })
})




let showAlert = true;
let per_pos = 0;

// Обработчик события scroll
window.addEventListener("scroll", () => {
    let scrol_posi = window.pageYOffset;

    if (scrol_posi >= 500 && showAlert && scrol_posi > per_pos) {
        alert("Оксана в 300м от вас");
        showAlert = false;
    }
    // Таймер для сброса состояния через 5 секунд
    // setTimeout(() => {

    // }, 5000); ???
});






















// let mainElement = d.documentElement
// // ширина страницы без учета скрола //
// let main_element_width = mainElement.clientWidth
// // высота страницы без учета скрола //
// let main_element_height = mainElement.clientHeight
// console.log(main_element_width, main_element_height);



// // ширина страницы с учета скрола //
// let m_width = window.innerWidth
// // высота страницы с учета скрола //
// let m_height = window.innerHeight
// console.log(m_width, m_height);


// // проверка на высоту всеми методами //
// let scroll_height = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
// )
// // проверка на ширину всеми методами //
// let scroll_width = Math.max(
//     document.body.scrollWidth, document.documentElement.scrollWidth,
//     document.body.offsetWidth, document.documentElement.offsetWidth,
//     document.body.clientWidth, document.documentElement.clientWidth)

// console.log(scroll_width);
// console.log(scroll_height);

// // прокрутка экрана  в длину//
// let window_scrol_top = window.pageYOffset
// // прокрутка экрана  в ширину//
// let window_scrol_left = window.pageXOffset
// console.log(window_scrol_top);




















