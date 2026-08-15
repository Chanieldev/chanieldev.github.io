/* ========================================
   CHANIEL | WEBSITE JAVASCRIPT
======================================== */


/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}


/* ========================================
   CLOSE MOBILE MENU
   WHEN A LINK IS CLICKED
======================================== */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {

            navLinks.classList.remove("open");

        }

    });

});


/* ========================================
   ACTIVE NAVIGATION LINK
======================================== */

const currentPage =
    window.location.pathname.split("/").pop();


navigationLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");


    if (
        linkPage === currentPage ||
        (
            currentPage === "" &&
            linkPage === "index.html"
        )
    ) {

        link.classList.add("active");

    }

});


/* ========================================
   SCROLL REVEAL
======================================== */

const sections =
    document.querySelectorAll("section");


const sectionObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    sectionObserver.observe(section);

});


/* ========================================
   BUTTON PRESS EFFECT
======================================== */

const buttons =
    document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform =
            "scale(0.97)";


        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});
