// --- Mobile Menu Toggle ---
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// --- Active Link Highlight on Scroll ---
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Close mobile navbar when clicking a link (scrolling)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
 
// --- Typed.js Initialization ---
// Matches the <span class="multiple-text"></span> in your index.html
const typed = new Typed('.multiple-text', {
    strings: ['BCA Student', 'Frontend Developer And', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});