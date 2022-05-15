
// бургер
document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.add("active");
})
document.querySelector(".header__btn-close").addEventListener("click", function() {
  document.querySelector(".header__nav").classList.remove("active");
})


// поиск
document.querySelector(".header__btn-search").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})

document.querySelector(".header__form-btn-close").addEventListener("click", function() {
  document.querySelector(".header__form").classList.remove("form__active");
  document.querySelector(".header__form-btn-close").classList.remove("active")
});
