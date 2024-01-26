 const chart = document.querySelector(".chart")
 const clicks = document.querySelector(".clicks")
 
 let a = 0;

 chart.addEventListener("mousedown", ()=>{
    a++
    clicks.innerHTML = "click here for cute lions: " + a
 })