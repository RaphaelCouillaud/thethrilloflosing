function openNav() {
 document.getElementById("myNav").style.width = "36%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  
  if (window.pageYOffset > 500) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})
