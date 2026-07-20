/*--- SITE LOADER ---*/

(() => {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    /*--- Loader Delay (Milliseconds) ---*/

    const LOADER_DELAY = 5000; // 5000 = 5 seconds | 8000 = 8 seconds

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

    }, 12000); // 12 seconds

}

    /*--- Initial Load ---*/

    document.addEventListener("componentsLoaded", hideLoader);

    window.addEventListener("load", hideLoader);

    /*--- Browser Back / Forward ---*/

    window.addEventListener("pageshow", () => {

        loader.classList.add("site-loader-hide");

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

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
            link.target === "_blank" ||
            link.hasAttribute("download")
        ) {
            return;
        }

        e.preventDefault();

        showLoader();

        setTimeout(() => {

            window.location.href = href;

        }, 100);

    });

})();
