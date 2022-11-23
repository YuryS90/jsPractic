/**
 * createLink - стрелочная функция, которая генерирует новую ссылку
 * {path, name} - деструктуризация параметров на значения path и name
 * Данная функция возвращает сгенерированный HTML
 *
 * Шаблонизация. Чтобы ей воспользоваться строку необходимо поместить в кавычки типа ``
 * и далее внутри этих кавычек будет доступен синтаксис ${} для вставки js.
 * Например, ${какая-то переменная}
 * Внутри обратных кавычек `` можно использовать как и двойные, так и одиночные.
 */

// 1-й вариант написания
//const createLink = ({path, name}) => {
//    return `<a target="_blank" href="${path}">${name}</a>`;
//}

// 2-й - сокращённая форма
const createLink = ({path, name}) => `<a target="_blank" href="${path}">${name}</a>`;

const ul = document.querySelector('ul');

const google = `<li>${createLink({path: 'https://google.com', name: 'Google'})}</li>`;

const yandex = `<li>${createLink({path: 'https://ya.ru', name: 'Yandex'})}</li>`;

// Создание ссылок
ul.insertAdjacentHTML('afterbegin', google);
ul.insertAdjacentHTML('afterbegin', yandex);


// ----------------------------------------------------------------
const strToLog = `
  Hello 
  World
    I am 
      New tab
`;

console.log(strToLog);