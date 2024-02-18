let menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', function() {
    let sidebarMenu = document.querySelector('.sidebar-menu');

    sidebarMenu.classList.toggle('hidden');
})