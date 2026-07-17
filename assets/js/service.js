/*--- Service Page ---*/

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

    /*--- Service List ---*/

    reveal(".service-list-header");

    reveal(".service-list-card");

    cardTilt(".service-list-card", 8, 8);

    spotlight(".service-list-card");

    /*--- Innovation Workflow ---*/

    reveal(".service-workflow-header");

    reveal(".service-workflow-card");

    cardTilt(".service-workflow-card", 8, 8);

    spotlight(".service-workflow-card");

});