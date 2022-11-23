document.querySelector('#load').addEventListener('click', load);

/**
 * При запросе по url получим ответ в json
 * fetch() делает запрос на сервер и возвращает промис по состоянию загрузки данных
 * При помощи then() будем обрабатывать промис. Т.е. выполняем какой-либо метод после того
 * как произойдёт загрузка данных.
 * response - это то что отправит сервер
 * Когда получаем response, что является асинхронной операцией. Потому что отправляем
 * запрос на сервер, сервер это обрабатывает и потом возвращает с API адреса данные.
 *
 * Используя метод fetch в 1-м then() (первая обработка промиса) получаем объект response.
 * Для того чтобы данный объект привести к json, то необходимо вернуть новый промис и вызвать
 * метод json(), который вернёт промис.
 *
 * Дальше, используя возможность промисов, в следующем then() получим data - массив users.
 * Массив состоит объект-элементов
 *
 * html.join превращает массив в строку, соединив по пробелу
 */
function load() {
    let url = 'https://jsonplaceholder.typicode.com/users';

    fetch(url)
        .then(function (response) {
            //console.log(response)
            return response.json();
        })
        .then(function (data) {
            let ul = document.querySelector('#list');

            // Динамическое формирование списка
            // В html лежит массив из строк
            let html = data.map(function (item) {
                return '<li>' + item.id + ' ' + item.name + ' (' + item.email + ')</li>'
            });

            // Формирование HTML. Добавление в ul сформированного списка
            ul.insertAdjacentHTML('afterbegin', html.join(' '));
        })
}