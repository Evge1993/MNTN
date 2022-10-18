const navBtn = document.querySelector('.header__button');
const mobileNav = document.querySelector('.header-mobile'); 
const body = document.body;

navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toggleMobileNav();
});

window.addEventListener('click', function() {
    if (body.classList.contains('no-scroll')) {
        toggleMobileNav();
    }
});

mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
});

function toggleMobileNav() {
    mobileNav.classList.toggle('header-mobile-active');
    navBtn.classList.toggle('header__button-close');
    body.classList.toggle('no-scroll');
}