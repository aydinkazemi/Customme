import 'swiper/css/bundle';
import '../scss/components/_main.scss';
import Swiper from 'swiper/bundle';
import '../scss/style.scss';
import './menu';
// import '../scss/components/web-main/header';


document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      // nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1200: { slidesPerView: 4 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 },
    },
  });
  console.log("main js LOADED");

});


// document.addEventListener("DOMContentLoaded", () => {
//   const toggle = document.getElementById("menu-toggle");
//   const menu = document.getElementById("menu");

//   if (toggle && menu) {
//     toggle.addEventListener("click", () => {
//       menu.classList.toggle("header__nav--open");
//       toggle.classList.toggle("is-active"); 
//     });
//   } else {
//     console.error("Menu toggle or menu element not found");
//   }
// });
console.log("menu.js loaded ✅");





