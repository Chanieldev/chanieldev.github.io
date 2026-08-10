document.addEventListener("DOMContentLoaded", () => {

    // Fade sections in when they appear
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


    // Smooth navigation
    document.querySelectorAll("nav a").forEach((link) => {

        link.addEventListener("click", (event) => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});