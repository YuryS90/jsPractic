/**
 * https://developer.mozilla.org/ru/docs/Web/API/MouseEvent
 * Когда происходит событие, то
 * вся информация событий сохраняется в глобальном объекте события
 * Для событий onmouseenter и onmouseleave хранится информация о том
 * откуда пришли и какой объект покинули
 */

// Самое простое - это клик
document.querySelector('.onclick').onclick = function () {
    console.log('click');
}

// Двойной клик
// *как удалять подсветку при двойном клике
document.querySelector('.ondblclick').ondblclick = function () {
    console.log('ondblclick');
}

// Движение мыши по элементу. Срабатывает при каждом наведении огромное количество раз
document.querySelector('.onmousemove').onmousemove = function () {
    console.log('move');
}

// Движение мыши по элементу. Срабатывает при каждом наведении 1 раз
// Например, если хотим открыть меню
document.querySelector('.onmouseenter').onmouseenter = function () {
    console.log('enter');
}

// Противоположность onmouseenter
// Например, если хотим выйти из меню
document.querySelector('.onmouseleave').onmouseleave = function () {
    console.log('bye');
}

/**
 * Данное событие устарело!!!
 */
// Прокрутка колесом мыши внутри элемента
// Можно сделать: прозрачность, размеры, заполнение чего-то, выбор опций
document.querySelector('.onmousewheel').onmousewheel = function () {
    console.log('ооо');
    return false;
}

