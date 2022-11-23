let cars = ['Ford', 'Mazda', 'Kia', 'BMW']

console.log(cars)
console.log(cars[2])
console.log(cars.length)

// добавит в конец
cars.push('Audi')
console.log(cars)

// удаляет и возвращает последний элемент
let audi = cars.pop()
console.log(cars, audi)

// удалять и возвращать первый элемент
let ford = cars.shift()
console.log(cars, ford)

// добавляет в начало
cars.unshift(audi)
console.log(cars)

let index = cars.indexOf('Kia')
let kia = cars[index]

console.log(kia)