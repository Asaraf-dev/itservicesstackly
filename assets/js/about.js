/*--- About Page ---*/

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

    reveal(".about-story-header");

    reveal(".about-story-item");

    reveal(".about-story-image-wrapper");

    reveal(".about-story-stat-card");

    /*--- Card Tilt ---*/

    cardTilt(".about-story-card", 8, 8);

    cardTilt(".about-story-stat-card", 6, 8);

    /*--- Image Hover ---*/

    imageHover(".about-story-image");

    /*--- Spotlight ---*/

    spotlight(".about-story-card");

    spotlight(".about-story-stat-card");

    /*--- Counter ---*/

    counter(".about-story-stats", ".index-counter");

    /*--- Mission & Vision ---*/

    reveal(".about-mv-header");

    reveal(".about-mv-card");

    reveal(".about-mv-values");

    reveal(".about-mv-value");

    cardTilt(".about-mv-card", 8, 8);

    spotlight(".about-mv-card");

    /*--- How We Work ---*/

    reveal(".about-work-header");

    reveal(".about-work-card");

    cardTilt(".about-work-card", 8, 8);

    spotlight(".about-work-card");

    /*--- Our Process ---*/

    reveal(".about-process-header");

    reveal(".about-process-center");

    reveal(".about-process-card");

    cardTilt(".about-process-card", 8, 8);

    spotlight(".about-process-card");

    /*--- Our Team ---*/

    reveal(".about-team-header");

    reveal(".about-team-featured");

    reveal(".about-team-card");

    cardTilt(".about-team-featured", 6, 8);

    cardTilt(".about-team-card", 8, 8);

    imageHover(".about-team-featured-image img");

    imageHover(".about-team-image img");

    spotlight(".about-team-featured");

    spotlight(".about-team-card");

    /*--- About CTA ---*/

    reveal(".about-cta-wrapper");

    cardTilt(".about-cta-wrapper", 6, 8);

    spotlight(".about-cta-wrapper");

});