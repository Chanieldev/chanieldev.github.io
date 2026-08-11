document.addEventListener("DOMContentLoaded", () => {

```
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


// Smooth scrolling for links on the same page
document.querySelectorAll('nav a[href^="#"]').forEach((link) => {

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


// Small hover effect for project cards
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});
```

});
