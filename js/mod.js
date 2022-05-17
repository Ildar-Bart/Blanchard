
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
