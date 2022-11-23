let str = '1,2,3,4,5,6,7,8';

// Получаем массив по разделителю
let array = str.split(',');
//console.log(array);

// Соединяем все элементы массива в строку по разделителю
//console.log(array.join(';'));

// Меняем порядок с 8 до 1
// console.log(array.reverse());

// Принимает неограниченное число параметров
// 1-й параметр - индекс (ключ) элемента, с которого начинаем
// 2-й параметр - какое количество элементов хотим удалить
// 3-й, 4-й и т.д. параметры - добавление элементов
array.splice(1, 0, '11', '22');

// В данном случае concat() создаст копию массива и объединит
let newArray = array.concat(['1', '2']);

// создаст копию массива
//let newArray = array.concat();
//console.log(newArray);


let objArr = [
    {name: 'Max', age: 27}, // 1-й элемент
    {name: 'Elena', age: 18}, // 2-й элемент
    {name: 'Victor', age: 20} // 3-й элемент
];

//console.log(objArr);


// В person попадает каждый элемент массива objArr
// Метод find() работает как цикл
let foundPerson = objArr.find(function (person) {
    //console.log(person); // получим три console.log для каждого элемента

    // Находим человека, у которого возраст равен 20, при помощи find()
    // если значение true, то элемент записывается в foundPerson
    return person.age === 20;
});



// На каждой итерации в i попадает число
let oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (i) {

    // Отфильтруем все числа, которые являются нечётными
    return i % 2 === 0;
});


// Каждый строчный элемент умножается на 2 и возвращается массив числовыми элементами
let numArray = array.map(function (i) {
    return i * 2;
});
console.log(numArray);