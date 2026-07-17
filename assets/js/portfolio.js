/*--- Portfolio Page ---*/

document.addEventListener("DOMContentLoaded", () => {

    /*--- Hero Spotlight ---*/

    const aboutHero = document.querySelector(".about-hero-section");

    const aboutContent = document.querySelector(".about-hero-content");

    if (aboutHero && aboutContent) {

        aboutHero.addEventListener("mousemove", (e) => {

            const rect = aboutHero.getBoundingClientRect();

            aboutContent.style.setProperty("--x", `${e.clientX - rect.left}px`);

            aboutContent.style.setProperty("--y", `${e.clientY - rect.top}px`);

        });

    }

    /*--- Reveal ---*/

    reveal(".about-hero-badge");

    reveal(".about-hero-title");

    reveal(".about-hero-description");

    reveal(".about-hero-buttons");

    /*--- Portfolio Filter ---*/

    const filterButtons = document.querySelectorAll(".portfolio-filter-btn");

    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            portfolioItems.forEach(item => {

                const category = item.getAttribute("data-category");

                if (filterValue === "all" || category === filterValue) {

                    item.style.display = "block";

                    setTimeout(() => {

                        item.classList.remove("hide");

                        item.classList.add("show");

                    }, 100);

                }

                else {

                    item.classList.remove("show");

                    item.classList.add("hide");

                    setTimeout(() => {

                        item.style.display = "none";

                    }, 300);

                }

            });

        });

    });

    /*--- Portfolio Section ---*/

    reveal(".portfolio-filter-header");

    reveal(".portfolio-filter-buttons");

    reveal(".portfolio-item");

    cardTilt(".portfolio-card", 8, 8);

    spotlight(".portfolio-card");

    imageHover(".portfolio-image img");

    /*--- Featured Case Study ---*/

    reveal(".portfolio-case-header");

    reveal(".portfolio-case-wrapper");

    cardTilt(".portfolio-case-wrapper", 6, 8);

    spotlight(".portfolio-case-wrapper");

    imageHover(".portfolio-case-image img");

    counter(".portfolio-case-results", ".index-counter");


});

