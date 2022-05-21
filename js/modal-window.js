const btnmw = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay')
const modals = document.querySelectorAll('.modals')
const btnclose = document.querySelectorAll('.modal__window-close-btn')

btnmw.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    // modals.forEach((el) => {
    //   el.classList.remove('modal--visible')
    // });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
  });
});


// btnclose.addEventListener('click', (e) => {
//   modals.forEach((el) => {
//     el.classList.remove('modal--visible')
//   });
//   btnclose.classList.remove('modal-overlay--visible');

// })


document.querySelector(".modal__window-close-btn").addEventListener("click", function() {
  document.querySelector(".modal").classList.remove("modal--visible");
  document.querySelector(".modal-overlay").classList.remove("modal-overlay--visible")
});
