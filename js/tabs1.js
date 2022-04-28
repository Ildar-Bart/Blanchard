let galleryswiper = new Swiper('.gallery__swiper', {
  // отступ между слайдами
  spaceBetween: 50,

   // Navigation arrows (стрелки)
  navigation: {
    nextEl: '.swiper-button-next-gal',
    prevEl: '.swiper-button-prev-gal',
  },


  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },



  // курсор перетаскивания
  grabCursor: true,

  //переключение при клине на слой
  slideToClickedSlide: true,

  // управление клавиатурой
  keyboard: {
    // Включить\выключить
    enabled: true,
    // Включить\выключить только когда слайдер в пределахвьюпорта
    onlyInViewport: true,
    // Включить\выключить с помощью клавиш Page Up и Page Down.
    pageUpDown: true
  },

  // // Управление колесом мыши
  // mousewheel: {
  //   invert: true,
  //   // чувствительность колеса мыши
  //   sensitivity: 1,
  // },

  // количество слайдов для показа
  slidesPerView: 3,
  // slidesPerView: "auto",

  // отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,

  // количество пролистываемых слайдов
  slidesPerGroup: 3,

  // бесконечный слайдер
  loop: true,

  // свободный режим
  // freeMode: true,

  // скрость
  speed: 500,


 });

