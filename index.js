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
    nav.style.height = (nav.style.height === '48px')? '100vh' : '48px';

    if (nav.style.height === '100vh') {
        subMenu.classList.remove('hidden');

        // Use setTimeout to reveal each anchor item one after the other
        subMenuList.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
        }, index * 75); // Adjust the delay (in milliseconds) between items
      });
    } else {
        subMenu.classList.add('hidden');

        subMenuList.forEach(item => {
            item.style.opacity = 0; // Hide the items when the menu is collapsed
          });
    }
})