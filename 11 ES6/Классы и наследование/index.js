// Иерархия
// RootElement (родитель) <= Box <= instances (экземпляры), которые будут засовываться
// в <div class="wrapper"></div>

class RootElement {

    // constructor нужен для инициализации класса
    // По умолчанию будет создаваться div
    constructor(tagName = 'div') {

        // создаётся какой-то тег
        this.$el = document.createElement(tagName);

        // Расстояние между фигурами
        this.$el.style.marginBottom = '20px';
    }

    // Метод, который скрывает элемент
    hide() {
        this.$el.style.opacity = '0';
        //this.$el.style.display = 'none';
    };

    // Метод, который показывает элемент
    show() {
        this.$el.style.opacity = '1';
    };

    // Вставляем в HTML - в div wrapper созданный элемент
    // insertAdjacentElement - создаём элемент, а не HTML
    // beforeend - изменение порядка отображения
    append() {
        document.querySelector('.wrapper').insertAdjacentElement('beforeend', this.$el);
    };
}

class Box extends RootElement {
    constructor(color, size = 150, tagName) {

        // Вызов супер конструктора, чтобы отработал this.$el.
        // Это означает, что вызываем constructor у Box, но необходимо
        // вызывать constructor у RootElement для того чтобы проинициализировался
        // элемент this.$el.
        // Ключевое слово super позволяет вызывать родительский метод - или constructor,
        // или какой-то другой метод, который позволяет инициализировать элемент this.$el
        super(tagName);

        // Сохранение color и size в приватные переменные this.color, this.size
        this.color = color;
        this.size = size;
    }

    // Метод, который создаст блок.
    // Доступ уже есть до элемента this.$el, который в class RootElement.
    create() {
        console.log(this.$el); // объект div
        this.$el.style.background = this.color; // <div> style="background: red;" </div>
        this.$el.style.width = this.$el.style.height = `${this.size}px`;

        // Вставляем данный элемент в HTML
        this.append(); // на экране выведет красный квадрат

        // Для того чтобы в redBox попал instances
        return this;
    }
}

class Circle extends RootElement {
    constructor(color) {

        // По умолчанию будет div
        super();

        // Сохранение color в this.color
        this.color = color;
    }

    // Метод, позволяет создать круг
    create() {
        this.$el.style.borderRadius = '50%';
        this.$el.style.width = this.$el.style.height = `120px`;
        this.$el.style.background = this.color;

        this.append();

        // Возвращать this необязательно
        return this;
    }
}

// Передаём в конструктор: 'red', 100, 'div' и вызываем метод
const redBox = new Box('red', 100, 'div').create(); // на экране отобразился красный квадрат

const blueBox = new Box('blue').create(); // на экране отобразился синий квадрат
//blueBox.hide(); // скрыть элемент

const circle = new Circle('green').create();

// Теперь можно написать некий функционал
// при наведении мыши скрываем элемент
circle.$el.addEventListener('mouseenter', () => {
    circle.hide();
});

// mouseleave - событие при убирании мыши с элемента
circle.$el.addEventListener('mouseleave', () => {
    circle.show();
});