console.log("hello");


let hamburgermenu=document.querySelector(".hamburger-lines");
let navItems=document.querySelector(".nav-items");

hamburgermenu.addEventListener("click",()=>{
    hamburgermenu.classList.toggle("active");
    navItems.classList.toggle("active");
})