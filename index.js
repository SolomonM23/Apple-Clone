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
let subMenuList = document.querySelectorAll('.sub-menu-mobile a')

menuBtn.addEventListener('click', function() {
    // Check the current height of the nav
    const isExpanded = nav.style.height === '100vh';

    // Toggle the height of the nav
    nav.style.height = isExpanded ? '48px' : '100vh';

    // Toggle the icon based on the nav height
    if (isExpanded) {
        // If nav is collapsing, hide sub-menu items
        subMenu.classList.add('hidden');
        subMenuList.forEach(item => {
            item.style.opacity = 0;
        });
    } else {
        // If nav is expanding, reveal sub-menu items with a delay
        subMenu.classList.remove('hidden');
        subMenuList.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
            }, index * 75);
        });
    }

    // Toggle the icon based on the nav height
    if (isExpanded) {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    } else {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    }
});