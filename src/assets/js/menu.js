src/js/menu.js
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
  
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("header__nav--open");
        toggle.classList.toggle("is-active"); // برای انیمیشن آیکن در صورت نیاز
      });
    } else {
      console.error("Menu toggle or menu element not found");
    }
  });
  console.log("menu.js loaded ✅");



