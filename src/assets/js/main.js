import 'swiper/css/bundle';
import '../scss/components/_main.scss';
import Swiper from 'swiper/bundle';


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




