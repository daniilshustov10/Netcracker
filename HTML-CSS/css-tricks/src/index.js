const mobileSearchOpener = document.querySelector('.mobile-search__opener');
const mobileSearchNav =  document.querySelector('.mobile-search__nav');
const headerSearch = document.querySelector('.header__search');
const nav = document.querySelector('.nav');

mobileSearchOpener.addEventListener('click', function(event) {
    this.classList.toggle('_open');
    headerSearch.classList.toggle('_open');
})

mobileSearchNav.addEventListener('click', function(event) {
    this.classList.toggle('_open');
    nav.classList.toggle('_open');
})