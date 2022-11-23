"use strict";

let select = document.querySelector('#select-1');
let radio = document.querySelector('input[name="rad-1"]');

select.onchange = function () {
    console.log(select.value);
    // console.log(radio.value);
}

let sendForm = document.querySelector('#send-form');

// Получаем форму, чтобы передать в serialize()
let form = document.querySelector('form');
sendForm.onclick = function (event) {
    // Чтобы страница не перезагружалась по нажатию на кнопку внутри формы
    // Т.е. прекратить отправку формы по умолчанию
    event.preventDefault();

    // Обработка данных. Так как элементов может быть много
    // чтобы не писать под каждую форму свои команды
    // serialize форм позволяет быстро одним махом получить данные из формы
    console.log(serialize(form)); // age=dfg&second-name=dfg&first-name=dfg
}