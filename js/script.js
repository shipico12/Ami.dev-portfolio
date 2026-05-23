// TYPING EFFECT

const typingText = document.querySelector(".typing-text");

const words = [
    "Full Stack Developer",
    "Software Engineer",
    "AI Developer",
    "Frontend Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

    }else{

        typingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

    }

    if(!isDeleting &&
        charIndex === currentWord.length){

        isDeleting = true;

        setTimeout(typeEffect, 1200);

        return;
    }

    if(isDeleting && charIndex === 0){

        isDeleting = false;

        wordIndex =
        (wordIndex + 1) % words.length;

    }

    setTimeout(typeEffect,
    isDeleting ? 60 : 100);
}

typeEffect();


// PARTICLES JS

particlesJS("particles-js", {

    particles: {

        number: {
            value: 85
        },

        color: {
            value: "#ff0000"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.5
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#ff0000",

            opacity: 0.4,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        events: {

            onhover: {

                enable: true,

                mode: "repulse"

            }

        }

    }

});


// SCROLL REVEAL

window.addEventListener("scroll",
revealSections);

function revealSections(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(function(section){

        const windowHeight =
        window.innerHeight;

        const sectionTop =
        section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(sectionTop <
            windowHeight - revealPoint){

            section.classList.add("active");
        }

    });

}

revealSections();


// ACTIVE NAVBAR LINK

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current =
            section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href")
            === "#" + current){

            link.classList.add("active");

        }

    });

});


// CYBER GLOW EFFECT

const cards =
document.querySelectorAll(
".skill-card, .project-card, .contact-box"
);

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.boxShadow =
        "0 0 30px rgba(255,0,0,0.35)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow =
        "none";

    });

});