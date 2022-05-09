document.querySelector(".gallery__swiper-slide").addEventListener("click", function() {
  document.querySelector(".modal-all").classList.add("active");
})
document.querySelector(".gallery__big-image-close").addEventListener("click", function() {
  document.querySelector(".modal-all").classList.remove("active");
})
