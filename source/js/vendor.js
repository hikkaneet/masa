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
      nextEl: '.programs__button-next',
      prevEl: '.programs__button-prev',
    },
    speed: 300,
  });
};

const initNewsSwiper = () => {
  // eslint-disable-next-line
  const newsSwiper = new Swiper('.news__swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 2,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      // eslint-disable-next-line
      renderBullet: function (index, className) {
        // eslint-disable-next-line
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    navigation: {
      nextEl: '.news__button-next',
      prevEl: '.news__button-prev',
    },
    speed: 300,
  });

  const tabItems = document.querySelectorAll('.news__tab-item');
  const tabList = document.querySelector('.news__tab-list');

  const newsCards = Array.from(newsSwiper.el.querySelectorAll('.news-card'));

  tabList.addEventListener('click', (event) => {
    if (event.target.classList.contains('news__tab-item')) {
      const selectedCategory = event.target.dataset.category;

      const filteredCards = newsCards.filter((card) => {
        const cardCategory = card.dataset.category;
        return selectedCategory === 'all' || cardCategory === selectedCategory;
      });

      newsSwiper.removeAllSlides();

      newsSwiper.appendSlide(filteredCards);

      newsSwiper.update();

      tabItems.forEach((item) => {
        item.classList.remove('is-active');
      });

      event.target.classList.add('is-active');
    }
  });
};


initHeroSwiper();
initProgramsSwiper();
initNewsSwiper();
