"use strict";
// Получаем все кнопки (включатели окна) с классом modal-show
// При клике запускаем функцию showModal()
// Кнопка выступает в роли включателя окна. Так как при включении окна,
// затемняется вся область окна и все остальные элементы становятся неактивными.
// Бывают также кнопки, которые отключают и переключают состояние.
// Событие 1. Открытие окна
document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

// Событие 2. Закрытие окна по нажатию на кнопку "Закрыть" внутри окна
document.querySelectorAll('.modal-close').forEach(function (element) {
    element.onclick = closeModal;
});

// Событие 3. Закрытие окна по нажатию на серую область вокруг окна
document.querySelectorAll('.modal-wrap').forEach(function (element) {
    //console.log(element);
    element.onclick = closeModal;
});

function showModal() {
    // Нужно понять какое окно (их может быть несколько) было выбрано
    // Через data-modal="#sign-in" зашифровали id окна
    // this указывает на объект, на котором произошло событие. Это кнопка, у которой есть атрибут data-modal.
    // Свойство dataset - все атрибуты data, которые прописаны данному элементу
    // modal - это что указывается после дефиса data-
    let modalId = this.dataset.modal; // получаем #sign-in

    //console.log(document.querySelector(modalId).parentElement);

    // Для включения окна нужно удалить класс hide, который скрывал его
    document.querySelector(modalId).classList.remove('hide');

    // При помощи onkeydown отлавливается ESC
    // Escape должен срабатывать только при открытом модальном окне!
    // Поэтому данная часть кода (document.onkeydown) расположена внутри метода showModal()
    // Событие 4. Закрытие окна по нажатию на Escape
    document.onkeydown = function (event) {
        if (event.code === 'Escape') {
            closeModal();
        }
    }
}

// Проходим по всем оболочкам открытых окон, скрывает (2) и удаляет Escape (3),
// чтобы Escape повторно не срабатывал
function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide'); // 2
    });

    document.onkeydown = null; // 3
}

/**
 * Получение родителя - это операции с DOM.
 * Чтобы найти родителя текущего элемента: parentElement and parentNode.
 * parentElement поднимает на уровень выше вложенности
 * Вложенные элементы ищутся с помощью querySelector
 */