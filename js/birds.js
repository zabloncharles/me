document.getElementById("birds").style.display = "none";
document.getElementById("rain").style.display = "none";

setTimeout(() => {
  document.getElementById("birds").style.display = "";
  
}, "1000");

setTimeout(() => {
  
  document.getElementById("rain").style.display = "";
}, "5000");