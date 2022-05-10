
// бургер
document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".header__top-nav").classList.add("active");
})
document.querySelector(".header__btn-close").addEventListener("click", function() {
  document.querySelector(".header__top-nav").classList.remove("active");
})


// поиск
document.querySelector(".header__btn-search").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("form__active");
  this.classList.add("active");
})

// document.addEventListener("click", function(e) {
//   let target = e.target;
//   let form = document.querySelector(".form-header");
//   if (!target.closest(".form-container")) {
//   form.classList.remove("form__active");
//     form.querySelector("input").value = "";
//     document.querySelector(".form-btn__open").classList.remove("active")
//   }
// });


document.querySelector(".header__form-btn-close").addEventListener("click", function() {
  document.querySelector(".header__form").classList.remove("form__active");
  document.querySelector(".header__form-btn-close").classList.remove("active")
});
