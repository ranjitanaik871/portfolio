// =========================================================
// MOBILE MENU
// =========================================================

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");


// Open / Close Mobile Menu

menuIcon.addEventListener("click", () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

});



// =========================================================
// CLOSE MENU WHEN NAVIGATION LINK IS CLICKED
// =========================================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuIcon.classList.remove("bx-x");

        navbar.classList.remove("active");

    });

});



// =========================================================
// ACTIVE NAVIGATION LINK ON SCROLL
// =========================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY + 200;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

            });


            const activeLink = document.querySelector(
                `.navbar a[href="#${sectionId}"]`
            );


            if (activeLink) {

                activeLink.classList.add("active");

            }

        }

    });

});



// =========================================================
// TYPED.JS
// =========================================================

const typedElement = document.querySelector(".multiple-text");


if (typedElement && typeof Typed !== "undefined") {

    new Typed(".multiple-text", {

        strings: [
            "BCA Student",
            "Frontend Developer",
            "UI/UX Designer",
            "AI/ML Learner"
        ],

        typeSpeed: 100,

        backSpeed: 50,

        backDelay: 1000,

        loop: true

    });

}



// =========================================================
// CONTACT FORM
// =========================================================

const contactForm = document.querySelector("#contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        contactForm.reset();

    });

}