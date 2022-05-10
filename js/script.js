// кнопки для секции header__cap-middle

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header__middle-list-btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__dropdown");

    document.querySelectorAll(".header__middle-list-btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active-btn");
      }
    });

    document.querySelectorAll(".header__dropdown").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-dropdown");
      }
    })
    dropdown.classList.toggle("active-dropdown");
    btn.classList.toggle("active-btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__middle-list")) {
    document.querySelectorAll(".header__dropdown").forEach(el => {
        el.classList.remove("active-dropdown");
    })
     document.querySelectorAll(".header__middle-list-btn").forEach(el => {
        el.classList.remove("active-btn");
    });
  }
})
})

// слайдер в секции header
let headerswiper = new Swiper('.header__swiper', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 5000
  },
  effect: "fade",
  allowTouchMove: false,

  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


// кастомный селект в секции галерея
const element = document.querySelector('#gallery__choice');
const choices = new Choices(element, {
    // отключение\включение поиска
    searchEnabled: false,

    // placeholder: f,
    // placeholderValue: null,
    itemSelectText: "",
    // shouldSort: false

    classNames: {
        containerOuter: 'choices header_choices',
      },
});

// слайдер в секции галерея
let galleryswiper = new Swiper('.gallery__swiper', {
  // отступ между слайдами
  spaceBetween: 50,

   // Navigation arrows (стрелки)
  pagination: {
    el: ".gallery__swiper-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn--next-gal",
    prevEl: ".swiper-btn--prev-gal"
  },

  // курсор перетаскивания
  // grabCursor: true,

  //переключение при клине на слой
  // slideToClickedSlide: true,

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
  // loop: true,

  // свободный режим
  // freeMode: true,

  // скрость
  speed: 500,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

 });



// аккардион
$( function() {
  $( ".catalog__accordion-list-year" ).accordion({
   icons: false,
   heightStyle: "content",
   collapsible: true,
   active: false
 });

} );

// слайдер в секции события

let eventsswipper = new Swiper('.events__swipper', {
 // отступ между слайдами
 spaceBetween: 50,

  // Navigation arrows (стрелки)
 navigation: {
   nextEl: '.swiper-button-next-event',
   prevEl: '.swiper-button-prev-event',
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
 slidesPerGroup: 1,

 // бесконечный слайдер
//  loop: true,

 // свободный режим
 // freeMode: true,

 // скрость
 speed: 500,

 breakpoints: {
  320: {
    slidesPerView: 1,
    spaceBetween: 0
  },

  576: {
    slidesPerView: 3,
    spaceBetween: 27,
    slidesPerGroup: 1,
  },

  1440: {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 1,
  },
},

});


// тодпиты в секции проект
// toolpit на библиотеки tippy
// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:
tippy('#myButton', {
  content: 'Пример современных тенденций&nbsp;&mdash; современная методология разработки',
  delay: 100,
  interactive: true,
  interactiveDebounce: 100,
  maxWidth: 264,
  offset: [0, 11],
  touch: true,
  allowHTML: true,
  theme: 'amethyst',
  arrow: true,
  animation: 'shift-away',
  // trigger: 'click',
  placement: 'top',
});

tippy('#myButton-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на&nbsp;базе аналитики выводы вызывают у&nbsp;вас эмоции',
  delay: 100,
  interactive: true,
  interactiveDebounce: 100,
  offset: [0, 11],
  touch: true,
  allowHTML: true,
  theme: 'amethyst',
  arrow: true,
  animation: 'shift-away',
  // trigger: 'click',
  placement: 'top',
});

tippy('#myButton-3', {
  content: 'В&nbsp;стремлении повысить качество',
  delay: 100,
  interactive: true,
  interactiveDebounce: 100,
  offset: [0, 11],
  touch: true,
  allowHTML: true,
  theme: 'amethyst',
  arrow: true,
  animation: 'shift-away',
  // trigger: 'click',
  placement: 'top',
});


 // слайд в секции проект
let progectsswipper = new Swiper('.projects__swipper', {
  // отступ между слайдами
  spaceBetween: 50,

  // Navigation arrows (стрелки)
  navigation: {
    nextEl: '.swiper-button-next-my',
    prevEl: '.swiper-button-prev-my',
  },
  // курсор перетаскивания
  grabCursor: true,

  // centerInsufficientSlides: true,
  // centeredSlides: true,
  // // centeredSlidesBounds: true,

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

  // Управление колесом мыши
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
  freeMode: true,

  // скрость
  speed: 500,

  // width: 1450,

  //Брейк поинт, ширина экрана
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },
});



// карта
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
   // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.76001376535697,37.59988687036122],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
    controls: ['zoomControl']
  });

   myMap.behaviors.disable('scrollZoom');
   var myCircle = new ymaps.GeoObject({
      geometry: {
          type: "Circle",
          coordinates: [55.76001376535697,37.59988687036122],
          radius: 50
      }
   });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myCircle);
}

// form валидация

let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99")
im.mask(phone);
new window.JustValidate('.contacts__form', {
  colorWrong: '#D11616',
  rules: {
    name: {
      required: true
    },
    phone: {
      required: true,
      function: (name, value) => {
        const ph = phone.inputmask.unmaskedvalue();
        return Number(ph) && ph.length ===  10;
      }
    },
  },
  messages: {
        name: "Вы не ввели имя",
        phone: {
          required: "Вы не ввели телефон",
          function: "Не достаточно количество символов"
        }
      }
});


document.querySelectorAll('.catalog__tabs-nav-item-btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;

  document.querySelectorAll('.catalog__tabs-nav-item-btn').forEach(function(btn){
  btn.classList.remove('catalog__tabs-nav-item-btn--active')});
  e.currentTarget.classList.add('catalog__tabs-nav-item-btn--active');

  document.querySelectorAll('.catalog__tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('catalog__tabs-item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-item--active');
  });
});


// document.querySelector(".gallery__swiper-slide").addEventListener("click", function() {
//   document.querySelector(".modal-all").classList.add("active");
// })



// let buttons = document.querySelector('.gallery__swiper-slide');

// buttons.addEventListener("click", function() {
//   document.querySelector(".modal-all").classList.add("active");})

// document.querySelector(".gallery__big-image-close").addEventListener("click", function() {
//   document.querySelector(".modal-all").classList.remove("active");
//   })


