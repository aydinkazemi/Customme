
// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   spaceBetween: 30,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

import Swiper from 'swiper';
import 'swiper/swiper-bundle.scss';

// تنظیمات Swiper
const swiper = new Swiper('.mySwiper', {
  slidesPerView: 4,  // فقط ۴ کارت در هر بار نمایش
  spaceBetween: 20,   // فاصله بین کارت‌ها
  loop: true,         // چرخش بی‌پایان
  navigation: {
    nextEl: '.swiper-button-next',  // دکمه بعدی
    prevEl: '.swiper-button-prev',  // دکمه قبلی
  },
  autoplay: {
    delay: 3000,  // مدت زمان نمایش هر اسلاید (3 ثانیه)
  },
  breakpoints: {
    640: {
      slidesPerView: 1,  // نمایش 1 کارت در موبایل
    },
    768: {
      slidesPerView: 2,  // نمایش 2 کارت در تبلت
    },
    1024: {
      slidesPerView: 4,  // نمایش 4 کارت در صفحات بزرگ‌تر
    },
  },
});

