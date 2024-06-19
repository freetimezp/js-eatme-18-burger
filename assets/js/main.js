//toggle menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    })
}


//remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));



//shadow header on scroll
const shadowHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
}

window.addEventListener("scroll", shadowHeader);



//scrollup
const scrollUp = () => {
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") : scrollup.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);


//active link on scroll
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};

window.addEventListener("scroll", scrollActive);



//scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
    reset: true
});

sr.reveal(`.home__data, .footer`);
sr.reveal(`.home__dish`, { delay: 500, distance: '100px', origin: 'bottom' });
sr.reveal(`.home__burger`, { delay: 1200, distance: '100px', duration: 1500 });
sr.reveal(`.home__ingredient`, { delay: 1600, interval: 120 });
sr.reveal(`.recipe__img, .delivery__img, .contact__image`, { origin: 'left' });
sr.reveal(`.recipe__data, .delivery__data, .contact__data`, { origin: 'right' });
sr.reveal(`.popular__card`, { interval: 120 });




