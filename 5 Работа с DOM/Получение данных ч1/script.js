// Если одна кнопка и одна функция, то лучше сделать её анонимной
document.querySelector('.push').onclick = function () {
    // Данные из input type='text'
    console.log(document.querySelector('.input-text').value);

    // Данные из input type='password'
    console.log(document.querySelector('.input-pass').value);

    // Данные из input type='range'
    console.log(document.querySelector('.input-range').value);

    // Данные из input type='date'
    console.log(document.querySelector('.input-date').value);

    // Данные из input type='color'
    console.log(document.querySelector('.input-color').value);

    // Данные из input type='checkbox'
    if (document.querySelector('#input-checkbox').checked) {
        console.log('checkbox выбран');
    } else {
        console.log('checkbox НЕ выбран');
    }
}

