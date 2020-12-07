const html = document.documentElement;
const cardButtons = document.querySelectorAll('.desk-notification__item-close')
const dzen = document.querySelector('.dzen');

Array.from(cardButtons).forEach(button => {
    let card = button.previousElementSibling;
    button.addEventListener('click', () => {
        card.classList.toggle('_fix')
    })
})


// let controller = new AbortController();
// let signal = controller.signal;
let loading = false;

function getImages(limit) {
    if (loading) return;
    loading = true;
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
        .then(response => response.json())
        .then(data => {
            data.forEach(el => {               

                const dzenItem = document.createElement('div');
                dzenItem.classList.add('dzen__item');

                const img = document.createElement('img');
                img.classList.add('dzen__item-img');
                img.setAttribute('src', el.thumbnailUrl);
                img.setAttribute('alt', el.title);

                dzenItem.append(img);

                dzen.append(dzenItem)
            })
        })
        .then(() => {
            loading = false;
        })
        .catch(e => {
            console.log(e.message)
            loading = false;
        })
}

getImages(6);

window.addEventListener('scroll', event => {
    if ((html.scrollHeight - html.scrollTop - html.clientHeight) < 50) {
        getImages(3);
    }
})
















