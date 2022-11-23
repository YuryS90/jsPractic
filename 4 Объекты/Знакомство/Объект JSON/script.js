let person = {
  name: 'Max',
  age: 26,
  car: {
    model: 'Ford'
  },
  job: 'Frontend',
  friends: ['Elena', 'Igor']
};

// Преобразует объект к строке
let str = JSON.stringify(person);

console.log(person);
console.log(str);

// Преобразует (парсит) из строки в объект
console.log(JSON.parse(str));