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
    autoplay: {
      delay: 3000,
    },
  });

  heroSwiper[0].on('slideChange', (s) => {
    // eslint-disable-next-line
    heroSwiper[1].slideTo(s.activeIndex)
  });

  heroSwiper[1].on('slideChange', (s) => {
    // eslint-disable-next-line
    heroSwiper[0].slideTo(s.activeIndex)
  });
};


initHeroSwiper();
