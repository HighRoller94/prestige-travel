// Scroll to Top + Button appear on scroll

const scrollTopIcon = document.querySelector('.scroll__top');

const scrollTop = () => {
    scrollTopIcon.classList.toggle('active', window.scrollY > 800);
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behaviour: 'smooth'
    })
}
window.addEventListener('scroll', scrollTop);


// Mobile Menu
// Click animation is done through CSS

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Change nav on scroll 

const nav = document.querySelector('.navbar');

const scrollNav = () => {
    if (window.scrollY > 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

window.addEventListener("scroll", scrollNav);

// Fade in animations

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
}

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader)
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
})

// Smooth Scroll

// Swiper Discover

