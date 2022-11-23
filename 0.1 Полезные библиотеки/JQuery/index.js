/**
 * $() - функция, которая позволяет получить доступ до любого элемента
 *
 * hover принимает 2 функции callback.
 * Каждая описывает событие. 1-я - mouseenter; 2-я - mouseleave
 * Ключевое слово function создаёт локальный контекст,
 * поэтому this будет вести на данный элемент (красный круг).
 * В результате при наведении курсора на красный круг, он будет увеличиваться, а при
 * убирании курсора - уменьшаться
 *
 * Обычно элементы jQuery, которые сами создаём, обозначаются через $ - $clone
 */

$('<div />')
    .css({
        margin: '20px auto',
        width: 200,
        height: 150,
        borderRadius: '50%',
        backgroundColor: 'red',
        transition: '.3s transform ease-in'
    })
    .hover(function () {
        $(this).css('transform', 'scale(1.1)')
    }, function () {
        $(this).css('transform', 'scale(1)')
    })
    .click(function () {
        const $clone = $(this).clone()

        $clone.css({
            position: 'relative',
            top: 50,
            backgroundColor: 'blue'
        })

        // При клике на клонированный элемент - удаляем
        $clone.click(() => $clone.fadeOut())

        // Вставляем новый клонированный элемент в body
        $(document.body).append($clone)
    })
    // Добавление к объекту body
    .appendTo($(document.body))