/* ========================================
   MOBILE MENU
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}


/* ========================================
   CLOSE MENU AFTER CLICKING A LINK
======================================== */

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("open");
        }

    });

});


/* ========================================
   ACTIVE PAGE
======================================== */

const currentPage =
    window.location.pathname.split("/").pop();

links.forEach(function (link) {

    const page = link.getAttribute("href");

    if (
        page === currentPage ||
        (currentPage === "" && page === "index.html")
    ) {

        link.classList.add("active");

    }

});
