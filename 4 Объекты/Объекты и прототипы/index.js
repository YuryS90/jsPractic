// number, bigInt, string, boolean, null, undefined, symbol
// object

let car = {
  name: 'Ford',
  year: 2015,
  person: {}
};

// car.__proto__ => Object.prototype
// car.__proto__ === Object.prototype // true
// [] => Array => Object

console.log(car)

/**
 * У глобального объекта есть класс Object. Синтаксис - {}
 *
 * От глобального объекта Object наследуются все прототипы (свойства) в новый объект car
 * car.__proto__ === Object.prototype // true
 *
 * У глобального объекта есть класс Array. Синтаксис - []
 * Когда создаём свой массив, то наследуемся от класса Array, а Array наследуется от Object.
 * Вызывая, например, метод toString() - [].toString(), то сначала обращаемся к
 * прототипу Array, и если его там не находим, то дальше обращаемся к прототипу Object.
 */