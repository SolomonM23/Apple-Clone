// // mobile nav menu button 
// let menuBtn = document.querySelector('#menu-btn');
// let sidebarMenu = document.querySelector('.sidebar-menu');

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


let menuBtn = document.querySelector('.menuBtn');
let nav = document.querySelector('.fake-nav');
let content = document.querySelector('.fake-content-overlay');

menuBtn.addEventListener('click', function() {
    nav.style.height = (nav.style.height === '5rem')? '50rem' : '5rem';

    if (nav.style.height === '50rem') {
        content.classList.add('fake-visible');
        content.classList.remove('fake-hidden');
    } else {
        content.classList.add('fake-hidden');
        content.classList.remove('fake-visible');
    }
})