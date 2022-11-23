/**
 * Есть концепт как Cookies - какие-то переменные, которые могут храниться в сессии,
 * передаваться на сервер. Js может работать с Cookies через document.cookie.
 * Но у cookie есть определённые проблемы. Обычно используют библиотеку,
 * которая упрощает работу с cookie.
 *
 * Хранение в LocalStorage
 * То, что пишется в input, после нажимаем "Save", то это где-то доложно сохраниться
 * в LocalStorage и при перезагрузке страницы, если есть какой-то текст, то будем
 * вставлять в заголовок <h1>Сюда...</h1>
 */

// Проставляем прослушку события click на button
document.querySelector('button').addEventListener('click', function (event) {

    // Сохраняем ЗНАЧЕНИЕ input в let value
    let value = document.querySelector('input').value;

    let obj = {
        text: value
    };

    // Сохраняем текст input-а в localStorage
    // Для сохранения значения используется setItem().
    // 1-й параметр - название параметра (любое), 2-й - значение в строковом формате
    localStorage.setItem('header777', JSON.stringify(obj));

    /**
     * Далее в браузере "Application->Local Storage" можно увидеть сохранённые данные
     * В качестве Key будет headerText, а Value - {"text":"hkj"}
     *
     * После перезагрузки страницы все данные остаются!
     */

});


/**
 * Как эти сохранённые данные можно использовать?
 *
 * При старте приложения будем забирать значение из Local Storage и,
 * если там что-то есть, тогда добавляем в <h1>Сюда...</h1>
 */

// Прослушка события DOMContentLoaded вызывается когда полностью прогружается DOM дерево
// Это как доп защита, так как в КОНЦЕ index.html находится подключение скрипта,
// т.е. скрипт загружается после того как загрузиться всё DOM дерево
document.addEventListener('DOMContentLoaded', function () {

    //let obj; // undefined
    let obj = {};

    /**
     *    Если парсить пустую строку, то выдаст ошибку, т.е. под ключом header777
     *    будет пустое значение и приложение сломается
     *
     * try {} catch {}
     * В catch {} выводим ошибку
     * В try {} парсим значение из localStorage
     * Если же будет ошибка в try, то приложение не сломается, а перейдёт в catch.
     *
     * Если obj будет пустой, то if не пройдёт
     */

    try {
        // Нужно получить объект вместо строки и обратиться к ключу header777
        obj = JSON.parse(localStorage.getItem('header777'));
    } catch (e) {
    }

    // Далее, если обращаться undefined . text, то будет ошибка.
    // Проверяем в obj на null, undefined
    // Если у obj вызываем метод trim, который удаляет лишние пробелы и что-то там остаётся,
    // то записываем в h1
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h1').textContent = obj.text;
    }
});