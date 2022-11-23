let numbers = [1, 2, 3, '4', 5, 6, 7, 8, 9];

// Добавляет элемент
// numbers.push('Not a number')
// numbers.push('New line')


// i++ => i = 5; 5 < 5
// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {

//      // Все чётные
//     console.log(numbers[i])
//   }
// }

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
        // Пропускаем все нечётное числа
//     continue
//   }
// Все чётные
//   console.log(numbers[i])
// }


// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     continue
//   }
//   console.log(numbers[i])
// }

numbers.push('String')

for (var i = 0; i < numbers.length; i++) {
  if (typeof numbers[i] === 'string') {
    // Данный оператор ПРОПУСТИТ все строковые типы
    continue

    // Данный оператор ПРЕРВЁТ цикл на '4'
    //break
  }
  console.log(numbers[i])
}
