/**
 * №1 Обычная функция
 */
// function getAge(year) {
//   const current = new Date().getFullYear();
//   return current - year;
// }

/**
 * №2 Стрелочная функция - аналог №1
 */
// const calculateAge = (year) => {
//   const current = new Date().getFullYear();
//   return current - year;
// }

/**
 * №3 Стрелочная функция. Если 1 параметр, то необязательно указывать "()"
 */
//const getAge = year => {
//  const current = new Date().getFullYear();
//  return current - year;
//}

/**
 * №4 Стрелочная функция. Если тело функции состоит из одной строчки,
 * то можно избавиться от return и усатых скобок "{}"
 */
// const getAge = year => new Date().getFullYear() - year;

// const logAge = year => console.log(new Date().getFullYear() - year);

// logAge(1993);

// console.log(getAge(1949));

/**
 * Стрелочные функции НЕ СОЗДАЮТ контекст,
 * т.е. this относиться к person, а не к window.
 *
 * До этого синтаксис, где ключевое слово "function" создавало контекст:
 *     logNameWithTimeout: function () {
 *         window.setTimeout(function () {
 *             console.log(this.firstName) // ошибка, т.к. firstName нет в window
 *         }, 1000)
 *     }
 */
const person = {
    age: 25,
    firstName: 'Maxim',
    logNameWithTimeout() {
        window.setTimeout(() => {
            console.log(this.firstName)
        }, 1000)
    }
};



console.log(person.logNameWithTimeout());
