/**
 * Регистрация
 */
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
        if (result == 2) {
            alert('Заполните поля');
        }
        else if (result == 1) {
            alert('Успех. Теперь можно войти!');
        }
        else {
            alert('Ошибка, повторите регистрацию позже!');
        }
    }
}

/**
 * Получаем разрешение на вход (авторизация)
 */
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
        console.log(result);
        if (result == 2) {
            alert('Заполните поля');
        }
        else if (result == 0) {
            alert('Пользователь не найден!');
        }
        else {
            console.log(result);
        }
    }
}

/**
 * После авторизации идёт вход пользователя.
 * Когда сервер понимает, что такой пользователь есть и необходимо осуществить
 * логирование пользователя. Системы авторизации логирования построены на куках
 * Куки - это файлы, которые генерирует сервер и отправляет в результате запроса клиенту.
 * Клиент (браузер) получает этот файл, сохраняет в хранилище Application и при каждом запросе
 * на сервер, если кука есть, браузер автоматически будет её отсылать на сервер.
 * Соответственно, сервер по этой куке получает доступ, и может понять залогинен ли пользователь или нет.
 * А также понимать по кукам, что пользователь делал до этого.
 * Если куки почистить, то придётся заново логиниться.
 *
 * При помощи Js установим куки
 */