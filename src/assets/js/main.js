import 'swiper/css/bundle';
import '../scss/components/_main.scss';
import Swiper from 'swiper/bundle';
import '../scss/style.scss';
import './menu';

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.interests-swiper', {
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

  new Swiper('.categories-swiper', {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 1,
    navigation: {
      nextEl: '.swiper-button-prev',
      prevEl: '.swiper-button-next',
    },
    breakpoints: {
      1200: { slidesPerView: 7 },
      768: { slidesPerView: 4 },
      480: { slidesPerView: 4 },
    },
  });
});





