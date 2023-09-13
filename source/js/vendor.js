import './vendor/swiper';
import './vendor/leaflet/leaflet';

const initHeroSwiper = () => {

  const swiperContainer = document.querySelector('.hero__swiper');
  const swiperPagination = document.querySelector('.hero__pagination');

  if (!(swiperContainer && swiperPagination)) {
    return;
  }

  // eslint-disable-next-line
  const heroSwiper = new Swiper('.hero__swiper', {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: swiperPagination,
      clickable: true,
    },
    speed: 0,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    /* eslint-disable */
    on: {
      init: function () {
        updateFocus(this.realIndex + 1);
      },
      slideChange: function () {
        updateFocus(this.realIndex + 1);
      },
    },
    /* eslint-enable */
  });

  heroSwiper[1].allowTouchMove = false;
  heroSwiper[1].autoHeight = true;
  heroSwiper[0].on('slideChange', (s) => {
    // eslint-disable-next-line
    heroSwiper[1].slideTo(s.activeIndex)
  });
  heroSwiper[1].on('slideChange', (s) => {
    // eslint-disable-next-line
    heroSwiper[0].slideTo(s.activeIndex)
  });
};

const initProgramsSwiper = () => {

  const swiperContainer = document.querySelector('.programs__swiper');
  const swiperScrollbar = document.querySelector('.programs__scrollbar');
  const swiperButtonNext = document.querySelector('.programs__button-next');
  const swiperButtonPrev = document.querySelector('.programs__button-prev');

  if (!(swiperContainer && swiperScrollbar && swiperButtonNext && swiperButtonPrev)) {
    return;
  }

  // eslint-disable-next-line
  const programsSwiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 17,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
      1441: {
        slidesPerView: 'auto',
        spaceBetween: 35,
      },
    },
    scrollbar: {
      el: swiperScrollbar,
      hide: false,
    },
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    speed: 300,
  });
};

function updateFocus(index) {
  const slides = document.querySelectorAll('.hero__slide');

  slides.forEach((slide, i) => {
    const elementsToFocus = slide.querySelectorAll('a, button');
    elementsToFocus.forEach((element) => {
      if (i === index) {
        element.removeAttribute('tabindex');
      } else {
        element.setAttribute('tabindex', '-1');
      }
    });
  });
}

const initNewsSwiper = () => {
  const swiperContainer = document.querySelector('.news__swiper');
  const swiperPagination = document.querySelector('.news__pagination');
  const swiperButtonNext = document.querySelector('.news__button-next');
  const swiperButtonPrev = document.querySelector('.news__button-prev');
  const tabItems = document.querySelectorAll('.news__tab-item');
  const tabList = document.querySelector('.news__tab-list');

  if (!(swiperContainer && swiperPagination && swiperButtonNext && swiperButtonPrev && tabItems && tabList)) {
    return;
  }

  const swiperItems = swiperContainer.querySelectorAll('.news-card');

  if (!swiperItems.length) {
    return;
  }

  // eslint-disable-next-line
  const newsSwiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      fill: 'row',
      rows: 2,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
        grid: {
          fill: 'row',
          rows: 1,
        },
        1441: {
          slidesPerView: 'auto',
          spaceBetween: 32,
        },
      },
    },
    pagination: {
      el: swiperPagination,
      clickable: true,
      // eslint-disable-next-line
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    speed: 300,
  });

  tabList.addEventListener('click', (event) => {
    if (event.target.classList.contains('news__tab-item')) {
      const selectedCategory = event.target.dataset.category;

      const filteredCards = Array.from(swiperItems).filter((card) => {
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

const initReviewsSwiper = () => {

  const swiperContainer = document.querySelector('.reviews__swiper');
  const swiperScrollbar = document.querySelector('.reviews__scrollbar');
  const swiperButtonNext = document.querySelector('.reviews__button-next');
  const swiperButtonPrev = document.querySelector('.reviews__button-prev');

  if (!(swiperContainer && swiperScrollbar && swiperButtonNext && swiperButtonPrev)) {
    return;
  }

  // eslint-disable-next-line
  const reviewsSwiper = new Swiper(swiperContainer, {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      1441: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
    scrollbar: {
      el: swiperScrollbar,
      hide: false,
    },
    navigation: {
      nextEl: swiperButtonNext,
      prevEl: swiperButtonPrev,
    },
    speed: 300,
  });
};

const initMap = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) {
    // eslint-disable-next-line
    const map = L.map('map').setView([55.028522, 82.928281], 17);
    // eslint-disable-next-line
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    // eslint-disable-next-line
    const pin = L.icon({
      iconUrl: '../img/svg/pin.svg',
      iconSize: [52, 70],
      iconAnchor: [27, 69],
    });
    // eslint-disable-next-line
    L.marker([55.028522, 82.928281], { icon: pin }).addTo(map);
  }
};

initHeroSwiper();
initProgramsSwiper();
initNewsSwiper();
initReviewsSwiper();
initMap();
