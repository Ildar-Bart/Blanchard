
// табы

// let.tabsBtn = document.querySelectorAll('.tabs-nav__btn');
// let.tabsItem = document.querySelectorAll('.tabs-item');

// tabsBtn.forEach(function(element){
//   element.addEvenListener('click', function(e){
//     const path = e.currentTarget.dataset.path;

//     tabsBtn.forEach(function(btn){btn.classlist.remove('tabs-nav__btn--acrive')});
//     e.currentTarget.classlist.add('tabs-nav__btn--acrive');

//     tabsItem.forEach(function(element){ element.classlist.remove('tabs-item--active')});
//     document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
//   } );
// } );


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
