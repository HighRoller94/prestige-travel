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

// Menu highlights

const highlightCurrent = () => {
    
    const highlight = document.querySelector('.menu-highlight')

    const homeMenu = document.querySelector('#home-page')
    const destinationsMenu = document.querySelector('#destinations-page')
    const exploreMenu = document.querySelector('#explore-page')
    const discoverMenu = document.querySelector('#discover-page')

    let scrollPosition = window.scrollY

    if (window.innerWidth < 960 && scrollPosition < 786) {
        homeMenu.classList.add('menu-highlight')
        destinationsMenu.classList.remove('menu-highlight')
        exploreMenu.classList.remove('menu-highlight')
        discoverMenu.classList.remove('menu-highlight')
        return
    } else if (window.innerWidth < 960 && scrollPosition < 2000) {
        homeMenu.classList.remove('menu-highlight')
        destinationsMenu.classList.add('menu-highlight')
        exploreMenu.classList.remove('menu-highlight')
        discoverMenu.classList.remove('menu-highlight')
        return
    } else if (window.innerWidth < 960 && scrollPosition < 3128) {
        homeMenu.classList.remove('menu-highlight')
        destinationsMenu.classList.remove('menu-highlight')
        exploreMenu.classList.add('menu-highlight')
        discoverMenu.classList.remove('menu-highlight')
        return
    } else if (window.innerWidth < 960 && scrollPosition < 4000) {
        homeMenu.classList.remove('menu-highlight')
        destinationsMenu.classList.remove('menu-highlight')
        exploreMenu.classList.remove('menu-highlight')
        discoverMenu.classList.add('menu-highlight')
    }

    if ((highlight && window.innerWidth < 960 && scrollPosition < 600) || highlight) {
        highlight.classList.remove('menu-highlight')
    }
}

window.addEventListener('scroll', highlightCurrent);
window.addEventListener('click', highlightCurrent);

// Mobile Menu

const menu = document.querySelector('#open-menu')
const menuClose = document.querySelector('#close-menu')
const menuLinks = document.querySelector('.navbar__menu')

const mobileMenu = () => {
    menu.classList.add('active')
    menuLinks.classList.toggle('active')
}

const closeMenu = () => {
    menuLinks.classList.remove('active')
}

const links = document.querySelectorAll(".navbar__links");

links.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove('active');
        menu.classList.remove('active');
    })
})

menu.addEventListener('click', mobileMenu);
menuClose.addEventListener('click', closeMenu);

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

