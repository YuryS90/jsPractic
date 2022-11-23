// Получаем все элементы li
let tab = document.querySelectorAll('.tab');

// Скрыли
init();

// Нужно отследить клик на элементе li
tab.forEach(function (element) {
    element.onclick = showTabs;
});

// Скрываем все элементы, кроме первого, поэтому let i = 1
function init() {
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 1; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
}

function showTabs() {
    // Считываем атрибут data, по которому будет клик.
    // Чтобы понять по какому элементу идёт клик - this
    let data = this.getAttribute('data'); // или 1, или 2, или 3

    // Скрываем все элементы let i = 0
    // и показываем тот, который соответствует элементу, по которому кликаем
    let tabBody = document.querySelectorAll('.tab-body');
    for (let i = 0; i < tabBody.length; i++) {
        tabBody[i].style.display = 'none';
    }
    // Показываем один элемент div, по которому кликаем.
    // Внутри querySelector можно использовать css: .tab-body[data="3"]
    //document.querySelector('.tab-body[data="' + data + '"]').style.display = 'block';
    document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
}