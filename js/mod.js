
// бургер
document.querySelector(".header__burger").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".header__burger-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})


// поиск
document.querySelector(".header__btn-search-open").addEventListener("click", function() {
  document.querySelector(".header__search").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".header__form-btn-close").addEventListener("click", function() {
  document.querySelector(".header__search").classList.remove("form__active");
  document.querySelector(".header__form-btn-close").classList.remove("active")
});


// табы
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
