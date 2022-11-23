/**
 * Переменная ford - это объект, который будет описывать машину
 *
 * Object самый глобальный класс в Js, в котором есть метод, способный создать объект
 *
 * create() принимает 1-2 параметра:
 * 1-й отвечает за прототип данного объекта, и описывается в виде объекта;
 * 2-й тоже объект, который описывает свойства данного объекта.
 *
 * В 1-м создаём прототип данного объекта, в котором будет функция calculateDistancePerYear.
 * Эта функция высчитывает, сколько машина проезжает в среднем за год.
 *
 * Особенности при создании объекта данным способом:
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
 * Дескриптор свойства — это запись с некоторыми из следующих атрибутов:
 *
 * value - задаём значение ключа;
 *
 * writable - false запрещает изменение значение value (имя машины ...);
 *
 * configurable - false запрещает изменять/удалять поля из объекта.
 * Есть оператор delete, который позволяет удалять определённые поля
 * Например, delete ford.distance, при false свойство не удалиться;
 *
 * enumerable - true позволяет открыть область видимости для определённых свойств, и
 * оно будет доступно для перечисления.
 * Поля, которые подсвечивались бледным цветом (в консоли) стали яркими
 *
 * Функции get и set можно передавать при создании определённого ключа в объекте
 *
 * Функция get будет вызываться в тот момент, когда будем обращаться к полю age
 * Поле age принимает значение при вычислении
 *
 * set сработает, когда ford.age = 3, после чего в консоли выведет "Устанавливаем значение"
 *
 * Благодаря данным функциям можно ОТСЛЕЖИВАТЬ изменение определённых ключей в объекте
 * На подобных свойствах построены js-фреймворки, в том числе Vue-js.
 *
 *
 * Можно создавать определённые поля в объекте, ПОЛНОСТЬЮ их настраивая!
 */

let ford = Object.create({
    calculateDistancePerYear: function () {

        /**
         * Когда вызываем функцию calculateDistancePerYear
         * в объекте необходимо создать новое свойство, например, distancePerYear.
         *
         * 1 способ создания: this.distancePerYear = 777,
         *
         * 2 способ. У глобального объекта Object есть метод defineProperty,
         * в котором можно задавать определённые свойства объектам и также их настраивать.
         *
         * 1-й параметр - объект, которому хотим добавить свойство;
         * 2-й параметр - название данного свойство, которое определяем;
         * 3-й параметр - указываем настройки в формате объекта.
         *
         * value - сколько пробегает машина за год
         */

        Object.defineProperty(this, 'distancePerYear', {

            // После обращения к age (this.age) сработал get,
            // где автоматически произошло вычисление возраста машины
            value: Math.ceil(this.distance / this.age),
            enumerable: false, // Если не хотим показывать через цикл - false
            writable: false,
            configurable: false
        })
    }
}, {
    name: {
        value: 'Ford',
        // Настройка объекта
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true, // дистанция изменяется со временем
        configurable: false
    },

    age: {
        enumerable: true,
        get: function () {
            console.log('Получаем возраст');
            // Возвращаем возраст машины
            return new Date().getFullYear() - this.year;
        },
        set: function () {
            // Например, ford.age = 3
            console.log('Устанавливаем значение');
        }
    }
});
console.log(ford)
ford.calculateDistancePerYear();

// Вывод
for (let key in ford) {
    // Если есть собственное свойство
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key]);
    }
}