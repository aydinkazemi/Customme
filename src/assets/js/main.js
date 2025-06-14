import 'swiper/css/bundle';
import '../scss/components/_main.scss';
import Swiper from 'swiper/bundle';
import '../scss/style.scss';
import './menu';

// interests swiper codes
  let swiperInstance;
  function handleSwiperInit() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    } else {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.interests-swiper', {
          loop: true,
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            1200: { slidesPerView: 4 },
            992: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
          },
        });
      }
    }
  }
  document.addEventListener('DOMContentLoaded', handleSwiperInit);
  window.addEventListener('resize', handleSwiperInit);

// categories swiper codes
  document.addEventListener('DOMContentLoaded', () => {
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





