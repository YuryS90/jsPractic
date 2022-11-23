/**
 * 2 действия: клавиша нажата и составляющая этого нажатия -
 * клавиша нажата, но не отпущена и клавиша отпущена
 */
// Событие onkeypress возникает когда клавиша нажата и отпущена
// Т.е. произошёл ввод символа

// Получить доступ к объекту событий можно через параметр функции event или просто e
// document.querySelector('#test').onkeypress = function (e) {
//     //e.altKey = false; // Была ли нажата клавиша Alt, когда происходил ввод
//     //e.ctrlKey = false; // Была ли нажата клавиша Ctrl, когда происходил ввод
//     //e.charCode // Код символа
//     //e.сode // Название клавиши
//     //e.key // Сама клавиша
//     //e.keyCode // Код введённого символа
//
//     // Валидация только цифр: e.keyCode < 48 || e.keyCode > 57
//     // Валидация только маленьких букв: e.keyCode < 97 || e.keyCode > 122
//     console.log(e.keyCode); // Можно посмотреть какой код имеют цифры: 0 - 48, 9 - 57
//
//     // Валидация только маленьких букв
//     if (e.keyCode < 97 || e.keyCode > 122) {
//         console.log('Недопустимые символы');
//     }
//     else {
//         // Печатать символы внутрь инпута
//         // += - это то что там есть только ещё добавить новый символ
//         this.value += e.key;
//     }
//
//     // Заблокировать ввод в input, т.е. в input-е символы не будут появляться
//     return false;
// }

// При вводе только больших букв они превращались в маленькие


// document.onkeydown = function (e) {
//     console.log(e);
// }

//let left = 0;

// document.onkeypress = function (e) {
//     console.log(e.keyCode);
//     let sq = document.querySelector('.sq');
//     if (e.keyCode == 100) {
//         left = left + 10;
//         sq.style.marginLeft = left + 'px';
//     }
//     if (e.keyCode == 97) {
//         left = left - 10;
//         sq.style.marginLeft = left + 'px';
//     }
// }

// Событие срабатывает, когда на зажатую кнопку, не отпуская
document.onkeydown = function () {
    console.log('down');
}

// Событие срабатывает, когда отпускаем кнопку
document.onkeyup = function () {
    console.log('up');
}

/**
 * Событие onkeypress отлавливаем нажатие клавиш со знаками.
 * нажатие функциональных клавиш, которые не являются символьными можно отловить по onkeydown
 */






