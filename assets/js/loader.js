/*--- Wait Components ---*/

document.addEventListener("componentsLoaded",()=>{

const loader=document.querySelector(".site-loader");

const progressBar=document.querySelector(".site-loader-progress-bar span");

const percent=document.querySelector(".site-loader-percent");

const status=document.querySelector(".site-loader-status");

const messages=[

"Initializing Experience...",

"Loading Assets...",

"Preparing Interface...",

"Optimizing Performance...",

"Launching Website..."

];

let progress=0;

const timer=setInterval(()=>{

progress++;

progressBar.style.width=progress+"%";

percent.innerHTML=progress+"%";

if(progress<20){

status.innerHTML=messages[0];

}

else if(progress<45){

status.innerHTML=messages[1];

}

else if(progress<70){

status.innerHTML=messages[2];

}

else if(progress<90){

status.innerHTML=messages[3];

}

else{

status.innerHTML=messages[4];

}

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

loader.classList.add("site-loader-hide");

},400);

}

},18);

});