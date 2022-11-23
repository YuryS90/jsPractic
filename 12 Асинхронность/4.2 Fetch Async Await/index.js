document.querySelector('#load').addEventListener('click', load)

/**
 * Та функция, в которой находиться промис, нужно сделать её асинхронной.
 * Когда функция является асинхронной, тогда можно применить оператор await.
 * Для того чтобы в let response получить нужный результат, то используем await
 */
async function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    let response = await fetch(url);
    let data = await response.json();

    let ul = document.querySelector('#list');

    let html = data.map(function (item) {
        return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
    });

    ul.insertAdjacentHTML('afterbegin', html.join(' '));
}