import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {CustomSelect} from './modules/select/custom-select';
import {Form} from './modules/form-validate/form';
import {initAccordions} from './modules/accordion/init-accordion';

// ---------------------------------

const toggleSubmenu = () => {
  const modalMenu = document.querySelector('.modal-menu');
  const subButtons = modalMenu.querySelectorAll('.modal-menu__sub-button');

  if (!modalMenu && !subButtons) {
    return;
  }

  subButtons.forEach((subButton) => {
    subButton.addEventListener('click', () => {
      const subMenu = subButton.nextElementSibling;
      subMenu.classList.toggle('modal-menu__sub-menu--closed');
      subButton.classList.toggle('modal-menu__sub-button--rotated');

      const subLinks = subMenu.querySelectorAll('.modal-menu__sub-link');

      subLinks.forEach((subLink) => {
        subLink.tabIndex = subMenu.classList.contains('modal-menu__sub-menu--closed') ? -1 : 0;
      });
    });
  });
};

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    toggleSubmenu();
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
