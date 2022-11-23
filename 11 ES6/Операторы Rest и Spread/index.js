/**
 * Rest оператор применяется для сбора всех параметров
 *
 * Spread оператор служит для того, чтобы разворачивать объекты.
 * Данный способ создаёт новые ссылки на поля
 */

const form = document.querySelector('form');

form.addEventListener('submit', event => {

    // При нажатии на submit,
    // чтобы не было в адресной строке ?title=123&text=123&description=123
    event.preventDefault();

    // title - input name='title'
    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;

    //console.log(title, text, description);

    // При способах 1, 1.2 и 2(Spread) нужно
    // передавать параметры в форме объекта {}
    saveForm1({title, text, description});

    // При способе 3(Rest) нужно передавать без {}
    saveForm2(title, text, description);

});

/**
 * При способах 1 (без деструктуризации) и 1.2 (с)
 * По мере добавления input-ов в форму, необходимо прописывать отдельно каждый элемент
 * Например, title2: data.title2
 *
 * При способе 2
 * С использованием оператора Spread неважно сколько полей передавать.
 * С ним можем РАЗВЕРНУТЬ объект data, который после поля date добавит остальные поля
 * к объекту formData - title, text, description, ...
 * Т.е. не придётся вручную перечислять параметры {title, text, description, ...},
 */

// Метод, который сохраняет данные формы на сервер
function saveForm1(data) {

    //console.log(data); // Object

    // Деструктуризация объекта
    //const {title, text, description} = data; // перечисляем параметры вручную

    // Подготовка объекта, который будет отправляться на сервер
    const formData = {
        // поле с текущей датой
        date: new Date().toLocaleDateString(),

        //title: data.title, // при способе 1 (без деструктуризации)
        //text: data.text, // при способе 1 (без деструктуризации)
        //description: data.description, // при способе 1 (без деструктуризации)

        // при способе 1.2 (если с деструктуризацией,
        // то удаляем строки способа 1)
        //title, text, description

        // Spread
        ...data // при способе 2
    };

    console.log('Ford data:', formData);
}

// Способ 3
// Rest ...args
// Когда не знаем сколько параметров попадёт в функцию
function saveForm2(...args) {

    //console.log(args); // Array

    // Деструктуризация массива
    const [title, text, description] = args;

    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, description
    };

    console.log('Ford data:', formData);
}

