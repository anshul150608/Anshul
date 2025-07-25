const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function downloadResume() {
  window.open("anshul-portfolio/Anshul_Resume_21.pdf", "_blank");
}ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .skills-container , .portfolio-box , .contact form' , {origin: 'bottom'});
 ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});


 const typed = new Typed('.multiple-text',{
     strings: ['Data Analyst'],
     typeSpeed :70,
     backSpeed: 70,
     backDelay : 1000,
     loop : true,
 })