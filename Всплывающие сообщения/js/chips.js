"use strict";

// Как будут выглядеть чипсы. Чипсы будут занимать правую часть экрана
// Размер не более 250px или 15% от ширины экрана. Они будут выстраиваться
// в виде блоков сверху вниз

// Функция, которая будет создавать чипс
// Чипс не должен висеть постоянно
function chips(message, timeremove = 3000) {

    // в ней будем создавать чипс в виде какого-то блока div
    // createElement() - создаёт новый элемент страницы,
    // но пока не вставлять внутрь самой страницы
    let chips = document.createElement('div');
    chips.classList.add('chips');

    // Добавим сообщение извне внутрь метода
    chips.innerHTML = message;

    // Далее div нужно добавить внутрь body
    // appendChild() - это какой элемент добавляем
    // document.querySelector('body').appendChild(chips);

    // Нужно создать кнопку, которая будет добавлять таких элементов несколько

    addChips(chips);

    // Функция исчезновения чипса. Для того чтобы он исчез - его нужно удалить
    setTimeout(function () { deleteChips(chips) }, timeremove);
}

function deleteChips(chips) {

    // Удаляем элемент-div из DOM
    chips.remove();

    // Получаем chips внутри chips-field
    let allChips = document.querySelectorAll('.chips-field .chips');

    // Как только удалятся все chips внутри chips-field, тогда удаляем оболочку chips-field
    if (allChips.length === 0) document.querySelector('.chips-field').remove();
}

function addChips(chips) {
    // Получаем оболочку-div chips-field
    let chipsField = document.querySelector('.chips-field');

    // Проверяем её существование. Если null, то будет false
    if (chipsField) {
        // Если оболочка есть, то добавляем внутрь оболочки дочерний div chips
        chipsField.appendChild(chips);
    }
    else {
        // Если нет, то создаём оболочку, а потом добавляем
        let chipsField = document.createElement('div');
        chipsField.classList.add('chips-field');
        document.querySelector('body').appendChild(chipsField);
        // Добавляем внутрь дочерний div chips (чипсину)
        chipsField.appendChild(chips);
    }
}

// Нужно создать кнопку, которая будет добавлять таких элементов несколько
// Метод chips() требует атрибуты. Если запускать функцию с атрибутом (параметрами)
// по событию, то запускать нужно через анонимную функцию, а внутри метод с атрибутом (параметром)
document.querySelector('button').onclick = function () {
    chips('hello', 5000);

}