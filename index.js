// nav menu button hides/shows sidebar when clicked
let menuBtn = document.querySelector('#menu-btn');
let sidebarMenu = document.querySelector('.sidebar-menu');

menuBtn.addEventListener('click', function() {

    sidebarMenu.classList.toggle('hidden');
    sidebarMenu.classList.toggle('visible');
})