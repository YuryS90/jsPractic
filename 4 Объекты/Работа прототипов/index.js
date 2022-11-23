/**
 * Создаём общий класс. Создавая класс, создаём от него объекты
 */

// Функция, которая является классом, где в конструктор передаём name, year
function Car(name, year) {
}

let ford = new Car('Ford', 2015);
console.log(ford);

/**
 * В console получаем:
 * Car {}
 * [[Prototype]]: Object
 *      constructor: ƒ Car(name, year)
 *      [[Prototype]]: Object
 * Где первый Prototype является прототипом класса Car1
 */


//=============================================================
function Car1(name, year) {
    // Записываем свойства в объект через this.
    // this равносильно let ford. Т.е. создаём поля для объекта ford
    this.name = name;
    this.year = year;

    //return this; т.е. не нужно это писать
}

/**
 * new возвращает this
 * return this; т.е. не нужно это писать
 */
let reno = new Car1('Reno', 2015);
let bmw = new Car1('BMW', 2017);
console.log(reno);
console.log(bmw); // Получим новый объект с другими значениями

// В console получаем:
//  Car1 {name: 'Ford', year: 2015}
//      name: "Ford"
//      year: 2015
//         [[Prototype]]: Object
//          constructor: ƒ Car1(name, year)
//          [[Prototype]]: Object

//=============================================================

/**
 * Зачем тут прототип
 * Допустим нужно посчитать возраст машины
 * Ранее записали бы так:
 *
 * let car = {
 *     getAge: function() {}
 * }
 */

/**
 * Данный подход применим только к одному объекту!
 * Благодаря прототипам, можно написать метод один раз в прототип
 * и дальше его использовать.
 *
 * Для этого обращаемся к прототипу родительского класса Car1.
 * reno и bmw произошли от родительского класса Car1.
 * getAge - название произвольное и дальше его определяем как функцию
 */

Car1.prototype.getAge = function () {

    // Функция getAge возвращает возраст машины
    return new Date().getFullYear() - this.year;
}

/**
 * Далее, если обратится к объекту reno
 */
console.log(reno.getAge()); // получим возраст

/**
 * Кроме функций можно задавать свойства для всех машин
 */
Car1.prototype.color = 'black';

reno.color = 'red';