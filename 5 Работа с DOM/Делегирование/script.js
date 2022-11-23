"use strict";

/**
 * 1 способ
 * К каждому i-ому элементу присваиваем событие click
 *
 * Если таких параграфов будет 10 000, то значит, что 10 000 раз придётся задавать
 * событие click. Также минус, что цикл будет прогонять 10 000 раз. За счёт этого
 * приложение будет тормозить!
 */

// var p = document.querySelectorAll('p')

// for (var i = 0; i < p.length; i++) {
//   p[i].addEventListener('click', function(event) {
//     event.target.style.color = 'blue'
//   })
// }

/**
 * 2 способ - делегирование.
 * Т.е. НЕ обязательно добавлять прослушку события click на каждый элемент.
 * Можно добавить прослушку события на весь документ при помощи addEventListener()
 *
 * При клике на общий контейнер, т.е. повесили событие всего лишь один раз на div #wrapper
 * через event.target можно получить конкретный элемент, по которому произошёл клик
 */
document.getElementById('wrapper').addEventListener('click', function(event) {

  console.log(event.target); // получим напр: <li>two</li>
  //console.log(event.target.tagName); // получим LI

  let tagName = event.target.tagName.toLowerCase();

  if (tagName === 'p') {
    event.target.style.color = 'blue'
  }

  // Если при клике по элементу, в котором есть класс color, то устанавливаем стиль red
  if (event.target.classList.contains('color')) {
    event.target.style.color = 'red'
  }
})
