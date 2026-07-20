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

    // Let the browser perform HTML5 validation first
    if (!this.checkValidity()) {

        e.preventDefault();
        this.reportValidity();

        return;

    }

    e.preventDefault();

    const modal = new bootstrap.Modal(
        document.getElementById("contactSuccessModal")
    );

    modal.show();

    this.reset();

});

/*--- Name Validation ---*/

const fullName = document.getElementById("fullName");

fullName.addEventListener("input", function () {

    this.value = this.value.replace(/[^A-Za-z ]/g, "");

});


/*--- Phone Validation ---*/

const phoneNumber = document.getElementById("phoneNumber");

phoneNumber.addEventListener("input", function () {

    this.value = this.value.replace(/\D/g, "");

    if (this.value.length > 10) {

        this.value = this.value.slice(0, 10);

    }

});


/*--- Form Validation ---*/

document.querySelector("form").addEventListener("submit", function (e) {

    if (!/^[A-Za-z ]+$/.test(fullName.value.trim())) {

        fullName.focus();

        e.preventDefault();

        return;

    }

    if (!/^[0-9]{10}$/.test(phoneNumber.value)) {

        phoneNumber.focus();

        e.preventDefault();

    }

});