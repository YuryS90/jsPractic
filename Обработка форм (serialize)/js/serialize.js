"use strict";

// Сюда передаём form
function serialize(form) {

    // Является ли элемент, который передаём, формой
    if (!form || form.nodeName !== "FORM") {
        return false;
    }

    // q - данные; i, j - вспомогательные переменные
    let i, j, q = [];

    // В цикле перебираем элементы формы
    for (i = form.elements.length - 1; i >= 0; i = i - 1) {

        // Если элемент не имеет name, то пропускаем
        if (form.elements[i].name === "") {
            continue;
        }

        // В зависимости какой тип имеет элемент
        switch (form.elements[i].nodeName) {
            case 'INPUT':

                // Если INPUT, то какой прописан type
                switch (form.elements[i].type) {
                    case 'text':
                    case 'tel':
                    case 'email':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':

                        // Если один из типов, то в массив q добавляем данные в формате "имя=значение input-a"
                        // Метод encodeURIComponent() заменяет спецсимволы кодом, например, %20 вместо пробела.
                        // Это нужно для сохранения целостности данных, чтобы корректно работали формы
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'checkbox':
                    case 'radio':

                        // Если checkbox и radio, то аналогично
                        if (form.elements[i].checked) {
                            q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        }
                        break;
                }
                break;
            case 'file':
                // Т.е. file не обрабатываем
                break;
            case 'TEXTAREA':
                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                break;
            case 'SELECT':
                switch (form.elements[i].type) {
                    case 'select-one':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
                            }
                        }
                        break;
                }
                break;
            case 'BUTTON':
                switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
                        break;
                }
                break;
        }
    }

    // В результате возвращается строка данных
    return q.join("&");
}