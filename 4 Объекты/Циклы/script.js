let obj = {
    id: 1,
    name: 'Valenok',
    data: [999, true, 'hh'],
}

// forEach тут не сработает!
// for (let objKey in obj) {
//     console.log(obj[objKey])
// }

// Преобразование объекта в массив
Object.entries(obj).forEach(function (item){
    console.log(item)
})