let menuBtn = document.querySelector('#menu-btn');
let nav = document.querySelector('.navbar');
let subMenu = document.querySelector('.sub-menu-mobile');
let subMenuList = document.querySelectorAll('.sub-menu-mobile a');


//Show/Hide SubMenu
menuBtn.addEventListener('click', function() {
 // Calculate isExpanded inside the event listener
    const isExpanded = nav.style.height === '100vh';

    // Get the current viewport width
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

    // Check if the viewport width is 735px or higher
    if (viewportWidth >= 735) {
        // Close the dropdown if it's open
        closeSubMenu();
        return; // Don't proceed with toggling
    }
    
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
    let navIcons = document.querySelectorAll('.nav-icons-hide');

    navIcons.forEach(element => {
        element.classList.toggle('invisible');
    });

    if (subMenu.classList.contains('sub-menu-mobile-hide-left')){
        subMenu.classList.remove('sub-menu-mobile-hide-left');
    }
});

// Function to close the SubMenu
function closeSubMenu() {
    nav.style.height = '48px';
    subMenu.classList.add('hidden');
    subMenuList.forEach(item => {
        item.style.opacity = 0;
    });

    menuBtn.classList.remove('fa-times');
    menuBtn.classList.add('fa-bars');

    nav.classList.remove('expanded');

    let navIcons = document.querySelectorAll('.nav-icons-hide');
    navIcons.forEach(element => {
        element.classList.remove('invisible');
    });
}

// Event listener to auto close SubMenu when vw reaches 735px
window.addEventListener('resize', function () {
    // Get the current viewport width
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  
    // Check if the viewport width is 735px or higher
    if (viewportWidth >= 735) {
      // Close the dropdown if it's open
      closeSubMenu();
    }
});

let subMenuSecondary = document.querySelector('.sub-menu-secondary');
let menuStore = document.getElementById('store');

//test logic for first sub link to open secondary menu div and hide subMenu
menuStore.addEventListener('click', function() {
    subMenu.classList.add('sub-menu-mobile-hide-left');
})

let subMenuBackBtn = document.querySelector('.sub-menu-secondary .back-btn');

subMenuBackBtn.addEventListener('click', function() {
    subMenu.classList.remove('sub-menu-mobile-hide-left');
})