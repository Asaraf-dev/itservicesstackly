/*--- SITE LOADER ---*/

(() => {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    /*--- Show ---*/

    function showLoader() {

        loader.classList.remove("site-loader-hide");

    }

/*--- Hide Loader ---*/

function hideLoader() {

    const loader = document.querySelector(".site-loader");

    if (!loader) return;

    setTimeout(() => {

        loader.classList.add("site-loader-hide");

    }, 1000); // Keep loader visible for 1 second

}

    /*--- Initial Load ---*/

    document.addEventListener("componentsLoaded", hideLoader);

    window.addEventListener("load", hideLoader);

    /*--- Page Navigation ---*/

    document.addEventListener("click", function (e) {

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

        /* Navigate immediately */
        window.location.href = href;

    });

})();