// menu.js
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle"); 
  const navbarList = document.querySelector(".navbar__list");

  toggle.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  });
});

  



