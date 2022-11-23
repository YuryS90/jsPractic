/**
 * Манипуляция парных тегов при помощи свойств
  */

// innerHTML - проводит манипуляции внутри парных тегов, позволяя внутри использовать теги
// innerText - проводит манипуляции внутри парных тегов, без использования тегов
// outerHTML - заменяет весь элемент полностью на любой другой элемент
// outerText - заменяет весь элемент полностью на строку
// insertAdjacentHTML - мультивставка:
// 'beforebegin'<a href="#">'afterbegin'Ссылка'beforeend'</a>'afterend'

// Перезапишем контент в p
document.querySelector('p').innerHTML = 'Hi!'; // заменит Hello внутри <p>...</p> на Hi!
// Дописать контент в p
document.querySelector('p').innerHTML += ' <b>Море!</b>'; // приклеит Море!(жирным) к Hi! Море!
document.querySelector('p').innerText += ' <b>Море!</b>'; // выведет <b>Море!</b>

// Можно создавать своё свойство и записать туда информацию, а после считать её
document.querySelector('p').spawn = 'LALALA';


document.querySelector('h1').outerHTML = '<h2>test</h2>'; // перезаписал <h1>World</h1>
document.querySelector('h2').outerText = '<h3>test2</h3>'; // перезаписал <h2>test</h2> на "<h3>test2</h3>"


document.querySelector('a').insertAdjacentHTML('beforebegin', 'text');
document.querySelector('a').insertAdjacentHTML('afterbegin', 'text2');
document.querySelector('a').insertAdjacentHTML('afterend', 'text3');
document.querySelector('a').insertAdjacentHTML('beforeend', 'text4');

// Задача, заменить содержимое внутри <span>спан</span> внутри div класса one
document.querySelector('.one span').innerHTML = 777;

/**
 * Манипуляция одиночных тегов при помощи атрибутов
  */

// Вместо картинки с котом меняем на собаку
document.querySelector('img').src =
    'https://cdn3.iconfinder.com/data/icons/animals-105/150/icon_animal_cachorro-48.png';

// Способ1.
// Получаем http://localhost:63342/script.js/5%20DOM%20%D0%92%D1%8B%D0%B2%D0%BE%D0%B4%20%D0%BD%D0%B0%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%83/style1.css
let a1 = document.querySelector('link');
// И меняем на другой стиль
//a1.href = 'style2.css';
//document.querySelector('link').href = 'style2.css';


// Получаем просто style1.css
let a2 = document.querySelector('link').getAttribute('href');

// Способ2. Чтобы получить и присвоить другой стиль:
let a3 = document.querySelector('link');
a3.setAttribute('href', 'style2.css');


// Получим все атрибуты
let a4 = document.querySelector('link').attributes;
console.log(a4);

// Стили можно менять, когда есть например, раздел "Для людей со слабым зрением",
// т.е. подключаются разные css стили