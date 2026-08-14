```javascript
/* ========================================
   SCROLL REVEAL
======================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const currentPage =
    window.location.pathname.split("/").pop();

const navLinks =
    document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    const linkPage =
        link.getAttribute("href");

    if (
        linkPage === currentPage ||
        (currentPage === "" &&
        linkPage === "index.html")
    ) {
        link.classList.add("active");
    }

});


/* ========================================
   MOBILE MENU
======================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinksContainer =
    document.querySelector(".nav-links");

if (menuToggle && navLinksContainer) {

    menuToggle.addEventListener("click", () => {

        navLinksContainer.classList.toggle("open");

    });


    const mobileLinks =
        navLinksContainer.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinksContainer.classList.remove("open");

        });

    });

}


/* ========================================
   BUTTON PRESS EFFECT
======================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform =
            "scale(0.97)";

        setTimeout(() => {

            button.style.transform = "";

        }, 120);

    });

});
```
