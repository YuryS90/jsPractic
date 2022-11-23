/**
 * Чтобы раскрывать меню к классу dropdown добавляется класс open
 *
 * 2 параметра в constructor:
 * selector - название выбранного города
 * options - выпадающий список городов
 *
 *
 * В дальнейшем можно добавлять картинки для label, так как вёрстку сделали самостоятельно.
 * В обычных select нет возможности добавлять картинки в выпадающий список.
 * Также имеем программную возможность управлять данным элементом через публичное API
 * с несколькими методами как open(), close() и select(id)
 */

class Dropdown {
    constructor(selector, options) {

        // Определяем приватную переменную this.$el, selector - строка
        this.$el = document.querySelector(selector);

        /**
         * this.$el - это (см index.html)
         * <div class="dropdown" id="dropdown">...</div>
         */

        /**
         * 1
         * Сохраняем в приватную переменную this.items значение options.items - массив.
         * Получаем доступ до всех элементов в классе Dropdown,
         * которые передали в качестве options
         *
         * 2
         * Вставляем значения по умолчанию (список городов) в label
         * По умолчанию берём первый элемент из массива items и находим label.
         * Находим label, с помощью объекта this.$el.
         * Обращаемся к массиву this.items, и забираем у первого элемента свойство label,
         * которое является "Москва"
         */
        // 1
        this.items = options.items;

        // 2
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label;

        /**
         * При клике на dropdown показываем меню, методом делегирования событий
         *
         * Добавляем один EventListener на весь dropdown, а дальше понимаем по какому
         * конкретному элементу был клик
         *
         * При событии click получаем определённый event
         *
         * 1-я проверка
         * Если сделали клик по элементу, у которого есть класс dropdown__label,
         * то значит сделали клик по-непосредственному label.
         * И далее необходимо либо открыть, либо закрыть dropdown
         *
         * 2-я проверка
         * Есть ли у элемента с классом dropdown класс open
         * Иными словами: при клике закрываем dropdown, если он был открыт
         *
         * else if
         * При клике на один из элементов выбирать его в качестве dropdown__label
         * Проверяем является ли event.target элементом li, по которому совершаем клик.
         * tagName проверяет наличие тега, который приводим к нижнему регистру
         * console.log(event.target) => <li data-id="rostov">Ростов</li>
         *
         * У каждого элемента есть уникальный data-id. Нужно вытаскивать элемент по id
         * dataset - атрибут, в котором содержатся все атрибуты data и проверить на наличие id.
         * В select передаём строку - event.target.dataset.id, которая равна, напр "rostov"
         *
         */
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {

                if (this.$el.classList.contains('open')) {
                    this.close();
                } else {
                    this.open();
                }

            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id);
            }
        })

        /**
         * Отображение всех элементов в выпадающем списке:
         *
         * 1 Генерируем HTML - li
         * this.items - массив, у которого есть map().
         * map() преобразовывает каждый элемент данного массива.
         * На каждой итерации в map получаем i (item)
         *
         * Без join()
         * itemsHTML - это массив, потому что map() возвращает массив
         * (5)['<li data-id="msk">Москва</li>', '<li data-id="spb">Санкт-Петербург</li>', '<li data-id="nsk">Новосибирск</li>', '<li data-id="krdr">Краснодар</li>', '<li data-id="rostov">Ростов</li>']
         * 0: "<li data-id=\"msk\">Москва</li>"
         * 1: "<li data-id=\"spb\">Санкт-Петербург</li>"
         * 2: "<li data-id=\"nsk\">Новосибирск</li>"
         * 3: "<li data-id=\"krdr\">Краснодар</li>"
         * 4: "<li data-id=\"rostov\">Ростов</li>"
         *
         * C join() itemsHTML приводится к строке
         *
         * К строке приводим для того чтобы, когда при клике получаем выпадающий список
         * городов между ними отображается запятая из-за того что это массив
         *
         * 2 Находим выпадающий список (ul), и добавляем в него сгенерированный HTML
         * при помощи insertAdjacentHTML
         *
         * В итоге получается выпадающий список городов, где при клике на каждый из
         * элементов ничего не происходит
         */

        // 1
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`;
        }).join('  ');

        // 2
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML);
    }

    /**
     * Публичный метод.
     * Передаём СТРОКУ id выбранного нами элемента, напр "rostov"
     *
     * В this.items находятся все элементы, где найдём нужный item
     * В find() на каждой итерации проверяем на совпадение i.id с переданным id
     *
     * console.log(item)
     * Получаем объект по которому совершили клик {label: 'Ростов', id: 'rostov'}
     *
     * Делаем поиск по this.$el при помощи querySelector
     * Изменяем значение (textContent) dropdown__label на название того элемента (item.label),
     * который получили, например на Ростов, и закрыть dropdown
     */
    select(id) {
        const item = this.items.find(i => i.id === id);
        //console.log(item)
        this.$el.querySelector('.dropdown__label').textContent = item.label;
        this.close();
    }

    /**
     * Динамическое оживление плагина при помощи методов open() и close(),
     * которые позволят открывать или закрывать Dropdown
     *
     * Чтобы открыть dropdown, добавляем к <div class="dropdown" id="dropdown">...</div>
     * класс open, а чтобы закрыть dropdown удаляем класс open
     */
    open() {
        this.$el.classList.add('open');
    }

    close() {
        this.$el.classList.remove('open');
    }
}


const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'}, // 0-й элемент
        {label: 'Санкт-Петербург', id: 'spb'}, // 1-й
        {label: 'Новосибирск', id: 'nsk'}, // 2-й
        {label: 'Краснодар', id: 'krdr'}, // 3-й
        {label: 'Ростов', id: 'rostov'} // 4-й
    ]
});