


// аккардион
$( function() {
  $( ".catalog__accordion-list-year" ).accordion({
   icons: false,
   heightStyle: "content",
   collapsible: true,
   active: false
 });

} );



let eventsswipper = new Swiper('.events__swipper', {
 // отступ между слайдами
 spaceBetween: 50,

  // Navigation arrows (стрелки)
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
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
 // loop: true,

 // свободный режим
 // freeMode: true,

 // скрость
 speed: 500,


});



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
 trigger: 'click',
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
   trigger: 'click',
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
   trigger: 'click',
   placement: 'top',
 });


 // слайд в проектах
let progectsswipper = new Swiper('.progects__swipper', {
 // отступ между слайдами
 spaceBetween: 50,

  // Navigation arrows (стрелки)
 navigation: {
   nextEl: '.swiper-button-next-my',
   prevEl: '.swiper-button-prev-my',
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

 // Управление колесом мыши
 mousewheel: {
   invert: true,
   // чувствительность колеса мыши
   sensitivity: 1,
 },

 // количество слайдов для показа
 slidesPerView: 3,
 // slidesPerView: "auto",

 // отключение функцтонала, если слайдов меньше чем нужно
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
 // breakpoints: {
 //     // when window width is >= 320px
 //     320: {
 //       slidesPerView: 1,
 //       spaceBetween: 20
 //     },

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
       zoom: 14
   });

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

