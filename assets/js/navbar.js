window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".custom-navbar");

    if(window.scrollY>50){

        navbar.classList.add("nav-scrolled");

    }

    else{

        navbar.classList.remove("nav-scrolled");

    }

});

/*--- Active Navbar ---*/

document.addEventListener("componentsLoaded",()=>{

const currentPage=window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link=>{

const href=link.getAttribute("href");

if(href===currentPage){

link.classList.add("active");

}

else{

link.classList.remove("active");

}

});

});