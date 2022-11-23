document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex,
    }

    ajax('core/signup.php', 'POST', signup, data);

    function signup(result) {
        console.log(result);
        if (result === 2) {
            alert('Заполните поля');
        } else if (result === 1) {
            alert('Успех. Теперь можно войти!');
        } else {
            alert('Ошибка, повторите регистрацию позже!');
        }
    }
}

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;

    let data = {
        "pass": pass,
        "email": email
    }

    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        //console.log(result);
        if (result === 2) {
            alert('Заполните поля');
        } else if (result === 0) {
            alert('Пользователь не найден!');
        } else {
            console.log(result);

            // Распаршиваем ответ сервера, чтобы получить email
            // Можно получать все данные о пользователе, спец сгенерированную строку в виде хэша
            result = JSON.parse(result);

            let d = new Date();

            // getTime() - текущее время в м/с. 24*60*60*1000 - это сутки.
            // 60 * 1000 время жизни одна минута
            d.setTime(d.getTime() + (60 * 1000));

            // Формирование времени жизни. Будет отсчитываться 1 мин от входа по UTC
            let expires = d.toUTCString();

            // Устанавливаем куку. У куки есть обязательный параметр - имя значения,
            // Ещё один параметр - раздел доменов path=/, в котором действуют куки.
            // Куки могут действовать в пределах одного домена или поддомена.
            // Т.е. установив куку у своего сайта, то другой сайт никак эту куку не увидит и не сможет получить.
            // Другой параметр expires - время жизни куки по UTC, которое можно установить для работы.
            // Для установки куки нужно получить email пользователя.
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}

/**
 * Когда проходит время жизни кук, пользователя разлогинивает.
 * Кука работает в пределах всего браузера, сколько бы вкладок не открыть
 */

