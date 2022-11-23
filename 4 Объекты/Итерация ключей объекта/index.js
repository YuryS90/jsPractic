/**
 * Получить доступ до всех ключей объекта
 */
let person = {
    name: 'Max',
    age: 28,
    job: 'Frontend'
};

/**
 * 1 способ через цикл for
 */
//for (let key in person) {
//
//    // Если есть собственный ключ,
//    // чтобы не затрагивать (не выводить) свойства в прототипе
//    if (person.hasOwnProperty(key))
//        console.log(person[key])
//}

/**
 * 2 способ
 * Object.keys(person) получаем ['name', 'age', 'job']
 *
 * Преимущество Object.keys в том, что он не идёт по прототипу, а затрагивает
 * только собственные ключи у объекта
 */
Object.keys(person).forEach(function (key) {
    console.log(person[key])
})