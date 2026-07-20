/*--- Reveal Animation ---*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("error404-show");

        }

    });

}, { threshold: .2 });

document.querySelectorAll(".error404-content,.error404-image").forEach(item => {

    item.classList.add("error404-hidden");

    observer.observe(item);

});

/*--- Mouse Parallax ---*/

const section = document.querySelector(".error404-section");

const workspace = document.querySelector(".error404-workspace");

const cloud = document.querySelector(".error404-cloud");

const server = document.querySelector(".error404-server");

const security = document.querySelector(".error404-security");

const circle = document.querySelector(".error404-circle");

section.addEventListener("mousemove", (e) => {

    const rect = section.getBoundingClientRect();

    const x = (e.clientX - rect.left - rect.width / 2) / 35;

    const y = (e.clientY - rect.top - rect.height / 2) / 35;

    workspace.style.transform = `translate(${x}px,${y}px)`;

    cloud.style.transform = `translate(${x * 2}px,${y * 2}px)`;

    server.style.transform = `translate(${-x * 2}px,${-y * 2}px)`;

    security.style.transform = `translate(${x * 1.5}px,${-y * 1.5}px)`;

    circle.style.transform = `translate(${x / 2}px,${y / 2}px)`;

});

section.addEventListener("mouseleave", () => {

    workspace.style.transform = "translate(0,0)";

    cloud.style.transform = "translate(0,0)";

    server.style.transform = "translate(0,0)";

    security.style.transform = "translate(0,0)";

    circle.style.transform = "translate(0,0)";

});

/*--- Floating Animation ---*/

document.querySelectorAll(

    ".error404-cloud,.error404-server,.error404-security"

).forEach((item, index) => {

    let distance = index % 2 === 0 ? -15 : 15;

    setInterval(() => {

        item.animate([

            {

                transform: "translateY(0)"

            },

            {

                transform: `translateY(${distance}px)`

            },

            {

                transform: "translateY(0)"

            }

        ], {

            duration: 3000,

            iterations: 1,

            easing: "ease-in-out"

        });

    }, 3000);

});

/*--- Button Ripple ---*/

document.querySelector(".error404-btn").addEventListener("mousemove", function (e) {

    const rect = this.getBoundingClientRect();

    this.style.setProperty("--x", (e.clientX - rect.left) + "px");

    this.style.setProperty("--y", (e.clientY - rect.top) + "px");

});

/*--- Go Back Button ---*/

const goBackBtn = document.getElementById("goBackBtn");

if (goBackBtn) {

    goBackBtn.addEventListener("click", () => {

        if (window.history.length > 1) {

            window.history.back();

        } else {

            window.location.href = "index.html";

        }

    });

}