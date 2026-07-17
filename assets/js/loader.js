/*--- SITE LOADER ---*/

(() => {

let loader = null;

/*--- Get Loader ---*/

function getLoader(){

    loader = document.querySelector(".site-loader");

    return loader;

}

/*--- Show Loader ---*/

function showLoader(){

    const loader = getLoader();

    if(!loader) return;

    loader.classList.remove("site-loader-hide");

}

/*--- Hide Loader ---*/

function hideLoader(){

    const loader = getLoader();

    if(!loader) return;

    requestAnimationFrame(() => {

        setTimeout(() => {

            loader.classList.add("site-loader-hide");

        },300);

    });

}

/*--- Components Loaded ---*/

document.addEventListener("componentsLoaded", () => {

    showLoader();

    requestAnimationFrame(() => {

        hideLoader();

    });

});

/*--- Page Transition ---*/

document.addEventListener("click",(e)=>{

    const link = e.target.closest("a");

    if(!link) return;

    const href = link.getAttribute("href");

    if(
        !href ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("javascript:") ||
        href.startsWith("http") ||
        link.target === "_blank"
    ){
        return;
    }

    e.preventDefault();

    showLoader();

    document.body.classList.add("page-transition");

    setTimeout(()=>{

        window.location.href = href;

    },350);

});

/*--- Browser Back / Forward ---*/

window.addEventListener("pageshow",()=>{

    hideLoader();

});

/*--- Restore Loader State ---*/

window.addEventListener("beforeunload",()=>{

    showLoader();

});

})();