/**
 * createCar содержит стрелочную функцию
 * чтобы не писать {name: name, model: model}, то можно написать {name, model}
 * Это работает с одинаковым названием ключа и значения
 */

// 1-й вариант написания
const createCar1 = (name, model) => {
    return {name, model};
};

// 2-й вариант написания
// Стрелочные функции, написанные в одну строчку, могут быть сокращены.
// Чтобы получился объект, то необходимо обернуть {} в ()
const createCar = (name, model) => ({name, model});

const focus = createCar('Ford', 'Focus');
const mandeo = createCar1('Ford', 'Mandeo');

console.log(focus);
console.log(mandeo);


/**
 * Можно создавать динамические поля в объектах.
 * Для этого нужно использовать [], куда записывается строковое значение
 */
const yearField = 'year';

const bmw = {
    name: 'BMW',
    ['model']: 'X6 Sport',
    [yearField]: 2018,

    // Метод, который выводит имеющиеся поля
    logFields() {

        // без деструктуризации
        console.log(this.name, this.model, this.year); // BMW X6 Sport 2018

        // Деструктуризация объекта. Убираем дублирование this
        // Для этого необходимо перечислить поля в {}
        const {name, year, model} = this;
        console.log(name, model, year); // BMW X6 Sport 2018
    }
}

bmw.logFields();

// Ещё один пример с деструктуризацией
//const year = bmw.year; // без деструктуризации
const {year} = bmw; // с деструктуризацией
console.log(year); // 2018