// mobile nav menu button 
let menuBtn = document.querySelector('#menu-btn');
let sidebarMenu = document.querySelector('.sidebar-menu');

function sidebarVisible() {
    sidebarMenu.classList.toggle('hidden');
    sidebarMenu.classList.toggle('visible');
    navBar.classList.toggle('nav-hidden')
    navBar.classList.toggle('nav-visible')
}
menuBtn.addEventListener('click', sidebarVisible);

//mobile sidebar exit button 
let sidebarClose = document.querySelector('.exit');
let navBar = document.querySelector('.navbar');

sidebarClose.addEventListener('click', sidebarVisible);