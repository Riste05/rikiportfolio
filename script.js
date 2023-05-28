'use strict';

const header = document.querySelector('.header');
const menuBurgerOpen = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');

// otvaranje na menu so burger 
menuBurgerOpen.addEventListener('click', () => {
    menuBurgerOpen.classList.toggle('open');
    mobileNav.classList.toggle('active');
});

//////////////////////////////////////////////

// KLIKANJE NA MOBILEN DA SE IZGUBI PROZOROT I DA SE NAMESTI MENU BURGEROT NA MESTO
mobileNav.addEventListener('click', () => {
    menuBurgerOpen.classList.remove('open');
    mobileNav.classList.remove('active')
});

//////////////////////////////////////////////

// TOCNO NA VTORIOS SECTION DA SE OTVORI FIXED KLASATA
const home = document.getElementById('home');
// visinata na headerot
const headerHeight = header.getBoundingClientRect();

function headerObserve(entries) {
    const [entry] = entries;


    if (!entry.isIntersecting) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        mobileNav.classList.remove('active');
        menuBurgerOpen.classList.remove('open');
    }
}

const secOption = {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight.height}px`
}

const headerObs = new IntersectionObserver(headerObserve, secOption);
headerObs.observe(home)

//////////////////////////////////////////////


// LOADER

// SEKOJA BUKVA SE SELEKTIRA I SE DAVA DIMENZIJA
const logoLoaderPath = document.querySelectorAll('#logo-loader path');

// DA SE VIDI KOLKU LINII IMA SEKOJA BUKVA I POSLE SE SREDUVA SO CSS
// for (let i = 0; i < logoLoaderPath.length; i++) {
//     console.log(`${i + 1} : ` + logoLoaderPath[i].getTotalLength())
// }


function loader() {
    document.getElementById('logo-loader').classList.add('fade-out')
}

function fadeOut() {
    setInterval(loader, 6400)
}

window.onload = fadeOut;

//////////////////////////////////////////////////////////

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');

ScrollReveal({
    distance: '150px',
    duration: 2500,
})

ScrollReveal().reveal(leftSide, { origin: 'left', delay: 6400 });
ScrollReveal().reveal(rightSide, { origin: 'right', delay: 6400 })

ScrollReveal().reveal('.service-item-one', { origin: 'top' })
ScrollReveal().reveal('.service-item-two', { origin: 'top', delay: 300 })
ScrollReveal().reveal('.service-item-three', { origin: 'top', delay: 600 })


//////////////////////////////////////////////////////////












