/*--- Contact Page ---*/

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

    /*--- Contact Information ---*/

    reveal(".contact-info-header");

    reveal(".contact-info-card");

    cardTilt(".contact-info-card", 8, 8);

    spotlight(".contact-info-card");

    /*--- Contact Form ---*/

    reveal(".contact-form-header");

    reveal(".contact-form-card");

    reveal(".contact-map-card");

    cardTilt(".contact-form-card", 8, 8);

    cardTilt(".contact-map-card", 8, 8);

    spotlight(".contact-form-card");

    spotlight(".contact-map-card");

    imageHover(".contact-map-wrapper iframe");

    /*--- Contact FAQ ---*/

    reveal(".contact-faq-header");

    reveal(".contact-faq-item");

    cardTilt(".contact-faq-item", 4, 6);

    spotlight(".contact-faq-item");

});

/*--- Contact Form ---*/

const contactForm = document.querySelector(".contact-form-card form");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const modal = new bootstrap.Modal(

        document.getElementById("contactSuccessModal")

    );

    modal.show();

    this.reset();

});