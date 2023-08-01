// Typed
var typed = new Typed("#text", {
    strings: ["Al Farizi Saugi Putra"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
  

// navbar-fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const line = document.querySelector('#line');
const navMenu = document.querySelector('#nav-menu');

line.addEventListener('click', function () {
    line.classList.toggle('line-active');
    navMenu.classList.toggle('hidden');
});


