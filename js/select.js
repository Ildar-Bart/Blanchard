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
