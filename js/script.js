// кнопки для секции header__cap-middle

const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

setMenuListener();


// скроллбар
document.querySelectorAll(".header__main-dropdown-wrap").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
})

// слайдер в секции header
let headerswiper = new Swiper('.js-hero-swiper', {
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
    nextEl: ".swiper-btn-next-gal",
    prevEl: ".swiper-btn-prev-gal"
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
  slidesPerView: 1,
  // slidesPerView: "auto",

  // отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,

  // количество пролистываемых слайдов
  slidesPerGroup: 1,

  // бесконечный слайдер
  // loop: true,

  // свободный режим
  // freeMode: true,

  // скрость
  speed: 500,

  breakpoints: {
    441: {
      slidesPerView: 2,
      spaceBetween: 38,
      slidesPerGroup: 2,
    },

    // 576: {
    //   slidesPerView: 2,
    //   spaceBetween: 38,
    //   slidesPerGroup: 2,
    // },

    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 34,
    //   slidesPerGroup: 2,
    // },

    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

 });



// аккардион
$( function() {
  $( ".catalog__accordion" ).accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: 0,
    animate: 300,

  });

} );

// слайдер в секции события

let eventsswipper = new Swiper('.events__swipper', {
  // отступ между слайдами
  spaceBetween: 20,


  pagination: {
    el: ".events__swiper-pagination",
    type: 'bullets',
  },


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
  slidesPerView: 1,
  // slidesPerView: "auto",

  // отключение функционала, если слайдов меньше чем нужно
  //  watchOverflow: true,

  // количество пролистываемых слайдов
  slidesPerGroup: 1,

  // бесконечный слайдер
  //  loop: true,

  // свободный режим
  // freeMode: true,

  // скрость
  speed: 500,

  breakpoints: {

    441: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    971: {
      slidesPerView: 3,
      spaceBetween: 27,
      slidesPerGroup: 3,
    },

    1281: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }
  },
});


// толпиты в секции проект
// toolpit на библиотеки tippy
// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:
(() => {
  tippy('.projects__toolpit-btn', {
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
    trigger: 'click',
    placement: 'top',
  });
})();


 // слайд в секции проект
let progectsswipper = new Swiper('.projects__swipper', {
  // отступ между слайдами
  spaceBetween: 50,
  // Navigation arrows (стрелки)
  navigation: {
    nextEl: '.swiper-button-next-proj',
    prevEl: '.swiper-button-prev-proj',
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
  slidesPerView: 1,
  // slidesPerView: "auto",

  // отключение функционала, если слайдов меньше чем нужно
  watchOverflow: true,

  // количество пролистываемых слайдов
  slidesPerGroup: 1,

  // бесконечный слайдер
  loop: true,

  // свободный режим
  freeMode: true,

  // скрость
  speed: 500,

  // width: 1450,

  //Брейк поинт, ширина экрана
  breakpoints: {


    441: {
      slidesPerView: 2,
      spaceBetween: 10,
      slidesPerGroup: 2,
    },

    610: {
      slidesPerView: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },

    971: {
      slidesPerView: 2,
      spaceBetween: 50,
      slidesPerGroup: 2,
    },

    1281: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    }

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
    controls: ['geolocationControl', 'zoomControl'],

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

// // табы
// document.querySelectorAll('.catalog__tabs-nav-item-btn').forEach(function(tabsBtn){
//   tabsBtn.addEventListener('click', function(e){
//   const path = e.currentTarget.dataset.path;

//   document.querySelectorAll('.catalog__tabs-nav-item-btn').forEach(function(btn){
//   btn.classList.remove('catalog__tabs-nav-item-btn--active')});
//   e.currentTarget.classList.add('catalog__tabs-nav-item-btn--active');

//   document.querySelectorAll('.catalog__tabs-item').forEach(function(tabsBtn){
//   tabsBtn.classList.remove('catalog__tabs-item--active')});
//   document.querySelector(`[data-target="${path}"]`).classList.add('catalog__tabs-item--active');
//   });
// });


