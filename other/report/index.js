// // XMLHttpRequest

// const URL = 'https://jsonplaceholder.typicode.com/todos';

// let xhr = new XMLHttpRequest();

// xhr.open('GET', URL + '?_limit=5', false);

// xhr.send()  // может быть body

// // события - load, progress, error

// xhr.onload = function() {
//     alert('Статус - ' + xhr.status)
// }

// // UNSENT = 0; исходное состояние
// // OPENED = 1;  вызван метод open
// // HEADERS_RECEIVED = 2; получены заголовки ответа
// // LOADING = 3; ответ в процессе передачи (данные частично получены)
// // DONE = 4;  запрос завершён

// console.log(xhr.response)

// function sendRequest(method, url, body=null) {
//     return new Promise((resolve, reject) => {

//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url)        
        
//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-Type', 'application/json');      

//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response)
//             }    
//         }

//         xhr.onerror = () => {
//             console.log(xhr.response)
//         }

//         xhr.send(JSON.stringify(body))
//     })    
// }

// const todo = {
//     userId: Date.now(),
//     title: 'my Todo',
//     completed: false
// }

// sendRequest('POST', URL, todo)
//     .then(data => console.log(typeof data))
//     .catch(error => console.log(error.message))




// Fetch

// fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => console.log(e.message))


// fetch(URL, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         title: 'my todo'
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(e => console.log(e.message))


// CORS

// Простой запрос – это запрос, удовлетворяющий следующим условиям:

// Простой метод: GET, POST или HEAD
// Простые заголовки – разрешены только:
// Accept,
// Accept-Language,
// Content-Language,
// Content-Type со значением application/x-www-form-urlencoded, multipart/form-data или text/plain.


// Access-Control-Allow-Origin
// Access-Control-Expose-Headers


// Access-Control-Request-Method  
// Access-Control-Request-Headers

// Access-Control-Allow-Methods 
// Access-Control-Allow-Headers


const rightCol = document.querySelectorAll('.app__column')

const form = document.createElement('form')
form.classList.add('form')

const input = document.createElement('input')
input.setAttribute('type', 'text')
input.setAttribute('placeholder', 'Введите github логин')


const button = document.createElement('button')
button.textContent = 'Получить пользователя'

form.appendChild(input)
form.appendChild(button)

button.addEventListener('click', event => {
    event.preventDefault();

    const user = input.value.trim();

    fetch(`https://api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            
            const img = document.createElement('img')
            img.setAttribute('src', data.avatar_url)
            rightCol[1].appendChild(img)
        })
        .catch(e => console.log(e.message))

    input.value = '';
})


rightCol[rightCol.length - 1].appendChild(form)






