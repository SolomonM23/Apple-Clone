let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
let subMenu = document.querySelector('.sub-menu-mobile');
let subMenuList = document.querySelectorAll('.sub-menu-mobile a');
let navIcons = document.querySelector('.nav-icons-hide');

// Toggle the height of the nav and perform other actions
menuBtn.addEventListener('click', function() {
 // Calculate isExpanded inside the event listener
    const isExpanded = nav.style.height === '100vh';

    // Toggle the height of the nav
    nav.style.height = isExpanded ? '48px' : '100vh';

    // Reveal/hide sub menu when nav height is expanded/collapsed
    if (isExpanded) {
        subMenu.classList.add('hidden');
        subMenuList.forEach(item => {
            item.style.opacity = 0;
        });
    } else {
        subMenu.classList.remove('hidden');
        subMenuList.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = 1;
            }, index * 75);
        });
    }

    // Change the menu button icon
    if (isExpanded) {
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
    } else {
        menuBtn.classList.remove('fa-bars');
        menuBtn.classList.add('fa-times');
    }

    // Set the background color based on isExpanded
    if (isExpanded) {
        nav.classList.remove('expanded');
    } else {
        nav.classList.add('expanded');
    }

    // Hide/show nav buttons and logo when nav expanded/collapsed
    if (!isExpanded) {
        navIcons.classList.add('invisible');
    } else {
        navIcons.classList.remove('invisible');
    }
});
