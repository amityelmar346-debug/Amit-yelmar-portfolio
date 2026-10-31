
// ======================================
// AMIT YELMAR PORTFOLIO JAVASCRIPT
// ======================================


// 1. MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// Close menu when clicking a navigation link

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// 2. TYPING ANIMATION

const typingText = document.getElementById("typing-text");

const words = [
    "Python Developer",
    "Django Developer",
    "Backend Developer",
    "API Developer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeAnimation() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeAnimation, 1400);
            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(
        typeAnimation,
        deleting ? 55 : 100
    );

}

typeAnimation();


// 3. SCROLL REVEAL ANIMATION

const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

document.querySelectorAll(".reveal").forEach(function (element) {

    revealObserver.observe(element);

});


// 4. HEADER SCROLL EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}, { passive: true });


// 5. ACTIVE NAVIGATION

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navItems.forEach(function (link) {

                    link.classList.toggle(

                        "active",

                        link.getAttribute("href") ===
                        "#" + entry.target.id

                    );

                });

            }

        });

    },

    {
        rootMargin: "-35% 0px -55% 0px"
    }

);

sections.forEach(function (section) {

    sectionObserver.observe(section);

});


// 6. CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
