/*--- Load Component ---*/

async function loadComponent(id, file) {

    const response = await fetch(file);

    const html = await response.text();

    document.getElementById(id).innerHTML = html;

}

/*--- Initialize Website ---*/

async function initWebsite() {

    try {

        await Promise.all([

            loadComponent("loader", "assets/components/loader.html"),

            loadComponent("navbar", "assets/components/navbar.html"),

            loadComponent("footer", "assets/components/footer.html")

        ]);

        requestAnimationFrame(() => {

            document.dispatchEvent(new Event("componentsLoaded"));

        });

    } catch (error) {

        console.error("Component loading failed:", error);

    }

}

document.addEventListener("DOMContentLoaded", initWebsite);
