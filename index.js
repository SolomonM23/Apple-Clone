// mobile nav menu button 
let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
let subMenu = document.querySelector('.sub-menu-mobile');
let subMenuList = document.querySelectorAll('.sub-menu-mobile a')
// let logo = document.querySelector('.fa-apple');
// let searchBtn = document.querySelector('.fa-magnifying-glass');
// let cartBtn = document.querySelector('.fa-bag-shopping');

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

    // Set the background color based on isExpanded
    nav.style.backgroundColor = isExpanded ? '/* Your original background color */' : '/* Your desired background color when expanded */';

    // Toggle the expanded class based on isExpanded
    if (isExpanded) {
        nav.classList.remove('expanded');
    } else {
        nav.classList.add('expanded');
    }

    // //Hide buttons when menu expanded
    // if (isExpanded) {
    //     logo.classList.add('invisible');
    //     searchBtn.classList.add('invisible');
    //     cartBtn.classList.add('invisible');
    // } else {
    //     logo.classList.remove('invisible');
    //     searchBtn.classList.remove('invisible');
    //     cartBtn.classList.remove('invisible');
    // }
});