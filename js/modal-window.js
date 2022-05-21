const btnmw = document.querySelectorAll('.btn-modal');
const modalOverlay = document.querySelector('.modal-overlay')
const modals = document.querySelectorAll('.modal')
const btnclose = document.querySelectorAll('.modal__window-close-btn')

btnmw.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible')
    modalOverlay.classList.add('modal-overlay--visible');
  });
});


btnclose.forEach((el) => {
  el.addEventListener('click', (e) => {
    modals.forEach((el) => {
      modalOverlay.classList.remove('modal-overlay--visible')
    });
    modals.forEach((el) => {
      el.classList.remove('modal--visible')
    });

});
})

