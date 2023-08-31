// Swiper 7.4.1
import './vendor/swiper';
// import './vendor/focus-visible-polyfill';

const initHeroSwiper = () => {
  // const swiperElement = document.querySelectorAll('.hero__swiper');
  // const paginationElement = document.querySelector('.hero__pagination');

  // eslint-disable-next-line
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.hero__pagination',
      clickable: true,
    },
    speed: 0,
    // autoplay: {
    //   delay: 3000,
    // },
  });

  heroSwiper[0].on('slideChange', (s) => {
    // eslint-disable-next-line
    heroSwiper[1].slideTo(s.activeIndex)
  });

  heroSwiper[1].allowTouchMove = false;
};

const initProgramsSwiper = () => {
  // eslint-disable-next-line
  const programsSwiper = new Swiper('.programs__swiper', {
    slidesPerView: 1,
    spaceBetween: 17,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 55,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    scrollbar: {
      el: '.programs__scrollbar',
      hide: false,
    },
    navigation: {
      nextEl: '.programs__nav-button--next',
      prevEl: '.programs__nav-button--prev',
    },
    speed: 300,
  });
};


initHeroSwiper();
initProgramsSwiper();
