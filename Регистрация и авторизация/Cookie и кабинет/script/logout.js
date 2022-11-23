document.querySelector('#logout').onclick = function () {
    // Нужно удалить конкретные куки

    // Получим куки, напр: email=spawn5194@mail.ru
    let c = document.cookie;
    console.log(c);

    // Изменим куки
    let d = new Date();

    // -10 минут назад
    d.setTime(d.getTime() - (10 * 60 * 1000));
    let expires = d.toUTCString();

    // Перезапись куки
    document.cookie = `${c}; expires=${expires}; path=/`;

    // Перезагрузка страницы по истечению жизни кука
    location.reload();
}

/**
 * Так невозможно было установить onclick в файле script.js:
 * Cannot set property 'onclick' of null
 * Потому что в cabinet.php не проверяем наличие элемента. Соответственно, возникает эта ошибка
 * Другой вариант - разнести script.js по файлам
 */