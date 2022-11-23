/**
 * Замыкание - возможность языка создавать локальный скоуп* данных
 * и впоследствии его затрагивать
 *
 * Скоуп - весь объем работ, который нужно выполнить для достижения цели проекта
 *
 * При помощи функции createCounter создаём одинаковые counter-ы при этом у них
 * область действия разные, т.е. счётчик у counterA и у counterB разные! Это замыкание!
 *
 * Получаем переменную counter как приватную переменную в функциях counterA и counterB,
 * которая будет работать внезависимости от того какая переменная вызвана
 */

// Функция createCounter
let createCounter = function () {

    // Локальная переменная, которая при создании будет равно 0.
    // ВИДНА только внутри данной функции!
    let counter = 0;

    // Возвращаем объект, в котором будет несколько методов
    return {
        increment: function () {
            counter++;
        },
        decrement: function () {
            counter--;
        },
        getCounter: function () {
            return counter;
        }
    }
};

// В counterA кладём новую функцию
let counterA = createCounter();
let counterB = createCounter();

// Увеличиваем на три
counterA.increment();
counterA.increment();
counterA.increment();

counterB.decrement();
counterB.decrement();

/**
 * В консоли:
 * counterA
 *  {increment: ƒ, decrement: ƒ, getCounter: ƒ}
 */

console.log(counterA.getCounter()); // 3
console.log(counterB.getCounter()); // -2