/*--- GLOBAL REVEAL ---*/

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: .15
});
function reveal(selector) {
    document.querySelectorAll(selector).forEach(item => {
        item.classList.add("reveal");
        revealObserver.observe(item);
    });
}

/*--- CARD TILT ---*/

function cardTilt(selector, rotate = 10, lift = 10) {
    document.querySelectorAll(selector).forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = ((y / rect.height) - .5) * -rotate;
            const rotateY = ((x / rect.width) - .5) * rotate;
            card.style.transform =
                `perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-${lift}px)`;
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform =
                `perspective(1000px)
rotateX(0deg)
rotateY(0deg)
translateY(0px)`;
        });
    });
}


/*--- MOUSE PARALLAX ---*/

function mouseParallax(
    sectionSelector,
    elements,
    strength = 40
) {
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    section.addEventListener("mousemove", (e) => {
        const rect = section.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const moveX = (x - rect.width / 2) / strength;
        const moveY = (y - rect.height / 2) / strength;
        elements.forEach(item => {
            const el = document.querySelector(item.selector);
            if (!el) return;
            const mx = moveX * (item.x || 1);
            const my = moveY * (item.y || 1);
            el.style.transform =
                `translate(${mx}px,${my}px)`;
        });
    });
    section.addEventListener("mouseleave", () => {
        elements.forEach(item => {
            const el = document.querySelector(item.selector);
            if (el) {
                el.style.transform = "translate(0,0)";
            }
        });
    });
}



/*--- Counter ---*/

function counter(sectionSelector, counterSelector) {

    const section = document.querySelector(sectionSelector);

    if (!section) return;

    let started = false;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting && !started) {

                started = true;

                const counters = section.querySelectorAll(counterSelector);

                counters.forEach(counter => {

                    const target = parseInt(counter.dataset.target);

                    const suffix = counter.dataset.suffix || "";

                    const duration = 2000;

                    const stepTime = 20;

                    const steps = duration / stepTime;

                    const increment = target / steps;

                    let current = 0;

                    const timer = setInterval(() => {

                        current += increment;

                        if (current >= target) {

                            current = target;

                            clearInterval(timer);

                        }

                        counter.innerHTML = Math.floor(current) + suffix;

                    }, stepTime);

                });

                observer.unobserve(section);

            }

        });

    }, {
        threshold: .3
    });

    observer.observe(section);

}

/*--- Image Hover ---*/

function imageHover(selector) {

    document.querySelectorAll(selector).forEach(image => {

        image.addEventListener("mousemove", (e) => {

            const rect = image.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - .5) * -6;

            const rotateY = ((x / rect.width) - .5) * 6;

            image.style.transform =

                `perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.04)`;

        });

        image.addEventListener("mouseleave", () => {

            image.style.transform =

                "perspective(1000px) rotateX(0) rotateY(0) scale(1)";

        });

    });

}

/*--- Spotlight ---*/

function spotlight(selector) {

    document.querySelectorAll(selector).forEach(card => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            card.style.setProperty(

                "--x",

                `${e.clientX - rect.left}px`

            );

            card.style.setProperty(

                "--y",

                `${e.clientY - rect.top}px`

            );

        });

    });

}

/*--- Floating ---*/

function floating(selector, distance = 10, duration = 3000) {

    document.querySelectorAll(selector).forEach((item, index) => {

        const move = index % 2 === 0 ? -distance : distance;

        setInterval(() => {

            item.animate([

                {

                    transform: "translateY(0)"

                },

                {

                    transform: `translateY(${move}px)`

                },

                {

                    transform: "translateY(0)"

                }

            ], {

                duration: duration,

                iterations: 1,

                easing: "ease-in-out"

            });

        }, duration);

    });

}

/*--- Smooth Scroll ---*/

function smoothScroll(target) {

    const element = document.querySelector(target);

    if (!element) return;

    window.scrollTo({

        top: element.offsetTop,

        behavior: "smooth"

    });

}

/*--- Scroll To Top ---*/

function scrollTopButton(selector, showClass = "index-footer-top-show", offset = 300) {

    const button = document.querySelector(selector);

    if (!button) return;

    window.addEventListener("scroll", () => {

        button.classList.toggle(

            showClass,

            window.scrollY > offset

        );

    });

    button.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*--- Home Initializer ---*/

function initHomePage() {

    /*--- Reveal ---*/

    reveal(".index-ser-header");

    reveal(".index-ser-card");

    reveal(".index-wcu-header");

    reveal(".index-wcu-card");

    reveal(".index-pro-header");

    reveal(".index-pro-step");

    reveal(".index-tech-header");

    reveal(".index-tech-card");

    reveal(".index-test-header");

    reveal(".index-test-card");

    reveal(".index-cta-wrapper");

    reveal(".index-footer-company");

    reveal(".index-footer-links");

    reveal(".index-footer-contact");

    /*--- Card Tilt ---*/

    cardTilt(".index-ser-card");

    cardTilt(".index-wcu-card");

    cardTilt(".index-pro-step");

    cardTilt(".index-tech-card");

    cardTilt(".index-test-card");

    /*--- Spotlight ---*/

    spotlight(".index-ser-card");

    spotlight(".index-wcu-card");

    spotlight(".index-tech-card");

    spotlight(".index-test-card");

    spotlight(".index-cta-wrapper");

    /*--- Floating ---*/

    floating(".index-tech-icon");

    floating(".index-test-quote");

    /*--- Counter ---*/

    counter(".index-stats-section", ".index-counter");

    /*--- Scroll Top ---*/

    scrollTopButton(".index-footer-top");

}