document.querySelector('.push').onclick = function () {

    /**
     * #1 Нужно получить элемент, который выбрал пользователь
     * Node - это узел структуры HTML страницы (DOM)
     */
    let radio = document.querySelectorAll('.radio-input'); // получили Nodelist (массив данных)

    // Обработаем полученный массив
    // Свойство length - это длина массива (коллекций) или количество элементов
    // от 0 до длины массива
    for (let i = 0; i < radio.length; i++) {

        if (radio[i].checked) {
            console.log(radio[i].value);
        }
    }

    /**
     * #2 Нужно всем <p> изменить цвет
      */
    let p = document.querySelectorAll('p');

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = 'red';
    }

    /**
     * #3 Определим какой из опций выбран
      */
    // Получим опции из select
    //let option = document.querySelector('select').options; // получим HTMLOptionsCollection(4)
    let option = document.querySelectorAll('#my-select option'); // получим Nodelist

    for (let i = 0; i < option.length; i++) {

        // Если текущий option выбран
        if (option[i].selected) {
            console.log(option[i].innerHTML);
        }

    }



}

