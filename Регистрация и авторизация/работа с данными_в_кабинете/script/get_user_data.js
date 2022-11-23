// 1 шаг вывести данные для того чтобы пользователь мог с ними работать.
// Чтобы вывести нужно послать запрос, вычитать эти данные из БД и разместить в нужные поля формы
// Главный вопрос - на какого пользователя нужно посылать запрос?
// Есть кука с какими-то данными. По правильному кука должна быть зашифрована
// Нужно вытащить из куки email и пошёлм ajax запрос на сервер, сервер вернёт все пользовательские данные
// которые разместим в форме, которые можно будет изменять
// https://www.w3schools.com/js/js_cookies.asp

//console.log(document.cookie); // email=spawn@mail.ru

// Получаем email пользователя
let userEmail = getCookie('email');
console.log(userEmail);

// Отправляем email
ajax('core/get_user_data.php', 'POST', getUserData, { "email": userEmail });

// Функция, которая извлекает из куки нужные параметры, например, spawn@mail.ru (без email=)
// В качестве параметра передаём имя куки
function getCookie(cname) {
    // к имени прилепляется =
    let name = cname + "=";

    // Вытаскивается из хранилища строку
    let decodedCookie = decodeURIComponent(document.cookie);

    // Разбиваем строку, разделённую ';', на массив
    let ca = decodedCookie.split(';');

    // Перебираем массив от 0 по его длине
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {

            // Извлекает часть подстроки spawn@mail.ru
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Обработка ответа сервера.
// Сервер отдал все данные по пользователю
function getUserData(result) {
    // Преобразовать строку в массив
    result = JSON.parse(result);
    console.log(result);
    // Получаем инпуты и присваиваем значение пришедшее из серера
    // чтобы пользователь мог рабоать со своми данными
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
}

/**
 * По нажатию по кнопке update необходимо повесить событие на #signup-submit, чтобы
 * данные с формы выбирались и отправлялись на обновление
 */
document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let updateData = {
        // Обновляем по email
        "email": userEmail,

        // Дальше данные, которые нужно обновить
        "name": document.querySelector('#signup-name').value,
        "pass": document.querySelector('#signup-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
    };
    ajax('core/update_user_data.php', 'POST', updateUserData, updateData);

}

function updateUserData(result) {
    console.log(result);
    if (result == 1) {
        alert('Данные успешно обновлены!');
    }
    else {
        alert('ошибка обновления');
    }
}