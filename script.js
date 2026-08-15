/* =========================================
   CHANIEL | WEBSITE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            if (navLinks.classList.contains("active")) {

                menuToggle.innerHTML = "✕";

                menuToggle.setAttribute(
                    "aria-label",
                    "Close navigation"
                );

            } else {

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            }

        });


        /* Close menu when a link is clicked */

        const links = navLinks.querySelectorAll("a");

        links.forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

            });

        });

    }


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".learning, .skill-card, .about-content, .about-card, .project-card"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        revealElements.forEach(element => {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("show");
        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    navigationLinks.forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            navigationLinks.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });


    /* =========================================
       BUTTON CLICK EFFECT
    ========================================= */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.96)";

            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });


    /* =========================================
       PROJECT LINK EFFECT
    ========================================= */

    const projectLinks =
        document.querySelectorAll(".project-link");

    projectLinks.forEach(link => {

        link.addEventListener("mouseenter", () => {

            link.style.letterSpacing = "1px";

        });

        link.addEventListener("mouseleave", () => {

            link.style.letterSpacing = "";

        });

    });

});
