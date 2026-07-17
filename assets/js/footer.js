/*---FOOTER ---*/

document.addEventListener("componentsLoaded", () => {

    /*--- Footer Reveal Animation ---*/

    const footerItems = document.querySelectorAll(
        ".index-footer-company, .index-footer-links, .index-footer-contact"
    );

    if (footerItems.length) {

        const footerObserver = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("index-footer-show");
                    footerObserver.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.15
        });

        footerItems.forEach(item => {

            item.classList.add("index-footer-hidden");
            footerObserver.observe(item);

        });

    }

    /*--- Scroll To Top Button ---*/

    const topBtn = document.querySelector(".index-footer-top");

    if (topBtn) {

        const toggleTopButton = () => {

            if (window.scrollY > 400) {

                topBtn.classList.add("index-footer-top-show");

            } else {

                topBtn.classList.remove("index-footer-top-show");

            }

        };

        toggleTopButton();

        window.addEventListener("scroll", toggleTopButton);

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /*--- Floating Social Icons ---*/

    const socialIcons = document.querySelectorAll(".index-footer-social a");

    if (socialIcons.length) {

        socialIcons.forEach((icon, index) => {

            setTimeout(() => {

                setInterval(() => {

                    icon.animate([
                        {
                            transform: "translateY(0px)"
                        },
                        {
                            transform: "translateY(-6px)"
                        },
                        {
                            transform: "translateY(0px)"
                        }
                    ], {
                        duration: 2200,
                        iterations: 1,
                        easing: "ease-in-out"
                    });

                }, 2200);

            }, index * 180);

        });

    }

});