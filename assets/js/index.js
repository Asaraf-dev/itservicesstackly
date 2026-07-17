/*--- Home Page ---*/

document.addEventListener("DOMContentLoaded",()=>{

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

counter(".index-stats-section",".index-counter");

/*--- Scroll Top ---*/

scrollTopButton(".index-footer-top");

});