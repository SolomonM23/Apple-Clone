// // mobile nav menu button 
// let menuBtn = document.querySelector('#menu-btn');
// let sidebarMenu = document.querySelector('.sub-menu-mobile');

// function sidebarVisible() {
//     sidebarMenu.classList.toggle('hidden');
//     sidebarMenu.classList.toggle('visible');
//     navBar.classList.toggle('nav-hidden')
//     navBar.classList.toggle('nav-visible')
// }
// menuBtn.addEventListener('click', sidebarVisible);

// //mobile sidebar exit button 
// let sidebarClose = document.querySelector('.exit');
// let navBar = document.querySelector('.navbar');

// sidebarClose.addEventListener('click', sidebarVisible);


let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
let subMenu = document.querySelector('.sub-menu-mobile');

menuBtn.addEventListener('click', function() {
    nav.style.height = (nav.style.height === '48px')? '100vh' : '48px';

    if (nav.style.height === '100vh') {
        subMenu.classList.remove('hidden');
    } else {
        subMenu.classList.add('hidden');
    }
})