"use strict";
/**
 * CORS: попытка обращения к другому серверу либо запуск обращения локально
 * вызовет ошибки CORS. Т.е. будет запрещено это делать.
 * Можно обращаться только в том случае, если владелец другого сайта позволит подключаться к нему
 * с помощью определённых запросов.
 * Для того чтобы обратиться к чужому серверу нужно чтобы этот сервер настроил подобное обращение, с помощью AJAX
 */
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest();

    /**
     * Асинхронный подход - это значит, что некоторые операции запускаются
     * и мы не ожидаем их окончания, переходим сразу к другим действиям.
     * Позволяет "параллеить" действия, НО с ним нужно быть осторожным!
     * Поскольку не можем быть уверенным, что операция завершилась и её нужно обработать.
     * Для этого есть специальные методы.
      */

    // Открываем соединение
    xhttp.open(method, url, true);

    // Устанавливаем заголовок - КАК посылаем данные
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Посылаем запрос с данными на сервер, например: name=ivan&age=53
    xhttp.send(dataArray);

    // Обработка ответа от сервера
    // onreadystatechange - это событие, в котором меняется состояние, когда придёт ответ от сервера.
    // Когда ответ пришёл, срабатывает анонимная функция
    xhttp.onreadystatechange = function () {

        // Проверка корректности ответа сервера
        // this - это то, что пришло от сервера. 4 - код состояния
        if (this.readyState === 4 && this.status === 200) {

            // Выводим то, что пришло от сервера
            // functionName - функция, которая обрабатывает ответ от сервера
            functionName(this);
        }
    }
}

// Преобразование массив данных к GET-строке: name=ivan&age=53
function requestData(dataArr) {

    // Изначально срока пустая
    let out = '';

    // for key in перебирает массив вида: let a, у которых нет ключей и индексов
    for (let key in dataArr) {
        // name=ivan&age=53
        out += `${key}=${dataArr[key]}&`;
    }
    //console.log(out);
    return out;
}

// Функция, которая обрабатывает ответ от сервера
function f1(data) {
    console.log(data);
}

let a = {
    "name": "ivan",
    "age": 53
}

ajax('back.php', 'POST', f1, requestData(a))