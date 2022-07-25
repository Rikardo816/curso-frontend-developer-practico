const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarridoAside);

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarridoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
