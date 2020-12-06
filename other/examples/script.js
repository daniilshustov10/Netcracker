const images = document.querySelector('.images')

let imagesList = []

function getImages() {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
        .then(response => response.json())
        .then(data => imagesList = imagesList.concat(data))
        .then(() => render(imagesList))
}

function render(imagesList) {
    imagesList.forEach(el => {
        const html = `
            <div class="image-item">
                <figure>
                    <img src=${el.thumbnailUrl} alt=${el.title}>
                    <figcaption><i>${el.title}</i></figcaption>
                </figure>            
            </div>`           
        
        images.insertAdjacentHTML('beforeend', html)
    })
}

getImages()






