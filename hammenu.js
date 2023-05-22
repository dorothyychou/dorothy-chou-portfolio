const smallnav = document.getElementById("mini-nav");
const smallmenu = document.querySelector(".small-menu");
const menuitems = document.querySelectorAll(".small-menu-item");
const hamburger = document.getElementById("hamburger");
const closebtn = document.getElementById("close-btn");
const menubtn = document.getElementById("ham-menu");

function toggleMenu() {
  if (smallmenu.classList.contains("show-menu")) {
    smallmenu.classList.remove("show-menu");
    smallnav.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "block";
  } else {
    smallmenu.classList.add("show-menu");
    smallnav.style.display = "inline";
    closebtn.style.display = "block";
    menubtn.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuitems.forEach( 
  function(menuitem) { 
    menuitem.addEventListener("click", toggleMenu);
  }
)