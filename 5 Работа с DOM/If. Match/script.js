// При загрузке страницы программа загадывает число от 1 до 10.
// Мы в input вводим число, если числа совпали, то будем выводить сообщение: "ОК"
// и перезагружать страницу.

// 1 делаем генерацию случайных чисел и округляем
let randomInt = Math.round(Math.random() * 10);
console.log(randomInt); // чтобы увидеть что загадало

let inp = document.querySelector('#int');

function checkNum() {
    let userInt = inp.value; // то, что ввели в input
    userInt = parseInt(userInt); // проверка на целое число
    console.log(userInt);

    if (isNaN(userInt)) {
        alert('Некорректное число');
    } else {
        if (randomInt === userInt) {
            alert('Угадано');
            location.reload();
        } else {
            alert('Ещё раз');
        }
    }
}

document.querySelector('#btn').onclick = checkNum;