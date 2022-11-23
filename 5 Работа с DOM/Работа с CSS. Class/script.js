let block1 = document.querySelector('.block-1');
//let block1Style = block1.style;
block1.style.width = '200px';
console.log(block1.style);

// Добавление классов red, green к классу block-1
block1.classList.add('red');
block1.classList.add('green');

// Удаление класса green из класса block-1
block1.classList.remove('green');

console.log(block1.classList); // список всех классов

// Проверка наличия класса у элемента: true/false
console.log(block1.classList.contains('red'));

// toggle - это переключатель: есть класс red, то выкл/вкл
// Например, если есть модальное окно
block1.classList.toggle('red');
block1.classList.toggle('red');
