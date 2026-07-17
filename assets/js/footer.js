/*--- FOOTER SCROLL REVEAL ---*/

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("index-footer-show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(
    ".index-footer-company, .index-footer-links, .index-footer-contact"
).forEach(item => {

    item.classList.add("index-footer-hidden");
    footerObserver.observe(item);

});


/*--- SCROLL TO TOP BUTTON ---*/

const topBtn = document.querySelector(".index-footer-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.classList.add("index-footer-top-show");

    } else {

        topBtn.classList.remove("index-footer-top-show");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/*--- SOCIAL ICON FLOAT ---*/

document.querySelectorAll(".index-footer-social a").forEach((icon, index) => {

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

    }, index * 200);

});