
let menuLinks = document.getElementById("features");
let clicked = true;
function handleMenuClick() {
   
    if (clicked) {
        menuLinks.style.display = "none"; 
        clicked = false;
    } else {
        menuLinks.style.display = "flex";
        clicked = true;
    }
    
}
let changedPic = false;
function handleDarkButton() {
    
    if (!changedPic) {
        document.getElementById("body").style.backgroundImage = "url(https://images.hdqwalls.com/download/night-mountains-minimalist-8k-wo-1920x1080.jpg)";
        changedPic = true;
    } else {
        document.getElementById("body").style.backgroundImage = "url(https://i.pinimg.com/originals/82/3a/15/823a15beda15bfddbec9da6f767ca04a.jpg)";
        changedPic = false;
    }
   
   
}