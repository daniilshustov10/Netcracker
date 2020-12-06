const mobileSearchOpener = document.querySelector('.ct-mobile-search__opener');
const mobileSearchNav =  document.querySelector('.ct-mobile-search__nav');
const headerSearch = document.querySelector('.ct-header__search');
const searchInput = headerSearch.querySelector('.ct-search__input');
const nav = document.querySelector('.ct-nav');

mobileSearchOpener.addEventListener('click', function(event) {
    this.classList.toggle('_open');
    headerSearch.classList.toggle('_open');
    
    if (headerSearch.classList.contains('_open')) searchInput.focus();
})

mobileSearchNav.addEventListener('click', function(event) {
    this.classList.toggle('_open');
    nav.classList.toggle('_open');
})