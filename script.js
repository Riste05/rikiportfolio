'use strict';

const header = document.querySelector('.header');
const menuBurgerOpen = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const aboutSkills = document.querySelector('.about-skill');


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

// ANIMACIJA NA ELEMENTITE OD DESNO KON LEVO I OD LEVO KON DESNO
function skillsClass(entries, observe) {

    //moze i na ovoj nacin ist efekt se dobiva 
    // entries.forEach(e => {
    //     console.log(e.target)
    //     e.target.classList.toggle('right-to-left' , e.isIntersecting);
    // })

    const [entry] = entries;

    if (!entry.isIntersecting) aboutSkills.classList.remove('right-to-left');
    else aboutSkills.classList.add('right-to-left');
}

const skillsOption = {
    root: null,
    threshold: 0.9
}

const skillsObserve = new IntersectionObserver(skillsClass, skillsOption);
skillsObserve.observe(aboutSkills);


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

// Download CV

// function downCV() {
//     return window.open('CV_PDF.pdf')
// }






















