
var header = document.getElementById("list");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName(" active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



let dropdownBtn = document.querySelector(".dropdown-menu");
let menuContent = document.querySelector(".menu-content");
dropdownBtn.addEventListener("click",()=>{
   if(menuContent.style.display===""){
      menuContent.style.display="block";
   } else {
      menuContent.style.display="";
   }
})

