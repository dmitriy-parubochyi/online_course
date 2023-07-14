window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 30);
})

const faqs = document.querySelectorAll('.faq');

faqs.forEach(function(faq){
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})


const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', function() {
    menu.style.display = "flex";
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', function() {
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})

const navMenuLis = document.querySelectorAll('.nav_menu li');


menuBtn.addEventListener('click', () => {
    navMenuLis.forEach( li => {
        li.classList.toggle('menuOpened')
    })
} );


closeBtn.addEventListener('click', () => {
    navMenuLis.forEach( li => {
        li.classList.toggle('menuOpened')
    })
} );





