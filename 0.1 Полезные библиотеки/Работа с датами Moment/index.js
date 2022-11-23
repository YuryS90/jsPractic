/**
 * moment() - глобальный объект-функция
 * https://momentjs.com/docs/#/parsing/
 */
const now = moment(); // текущая дата

// Устанавливаем свою дату от текущей
now.set({
    month: 9,
    date: 10,
    hour: 14
});

// Добавляем +2 дня
// https://momentjs.com/docs/#/manipulating/
now.add(2, 'd');

// https://momentjs.com/docs/#/displaying/
console.log(now.format('DD MMMM YYYY HH:mm:ss.SSS'));