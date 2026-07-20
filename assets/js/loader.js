/*--- SITE LOADER ---*/

(() => {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    const LOADER_DELAY = 2000; // 2 seconds

    /*--- Show Loader ---*/

    function showLoader() {

        loader.classList.remove("site-loader-hide");

        loader.style.opacity = "1";

        loader.style.visibility = "visible";

    }

    /*--- Hide Loader ---*/

    function hideLoader() {

        setTimeout(() => {

            loader.classList.add("site-loader-hide");

            loader.style.opacity = "0";

            loader.style.visibility = "hidden";

        }, LOADER_DELAY);

    }

    /*--- Components Loaded ---*/

    document.addEventListener("componentsLoaded", hideLoader);

    /*--- Window Loaded ---*/

    window.addEventListener("load", hideLoader);

    /*--- Browser Back / Forward ---*/

    window.addEventListener("pageshow", () => {

        showLoader();

        hideLoader();

    });

    /*--- Internal Navigation ---*/

    document.addEventListener("click", (e) => {

        const link = e.target.closest("a");

        if (!link) return;

        const href = link.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:") ||
            href.startsWith("http") ||
            link.target === "_blank"
        ) {
            return;
        }

        e.preventDefault();

        showLoader();

        requestAnimationFrame(() => {

            window.location.href = href;

        });

    });

})();