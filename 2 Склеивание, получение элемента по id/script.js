
// Знак + кроме сложения является СЛЕПЛИВАНИЕМ строк
// Если один из элементов строка, то склеивает
console.log('2' + '3'); // 23
console.log(2 + '3'); // 23

let p = document.querySelector('#test');
console.log(p.innerHTML = '<i>Hello</i>');
//console.log(p.innerText = '<i>Hello</i>');

// innerHTML работает с содержимым внутри тега p и позволяет использовать HTML
// innerText просто выводит содержимое строки