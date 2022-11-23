/**
 * Объявление переменных
 * в popupLinks получаем все объекты с классом popup__link
 * Т.е. popup открывался при клике на любой объект с классом popup__link,
 * который прописываем в HTML к ссылкам, например, картинка
 */
const popupLinks = document.querySelectorAll('.popup__link');

/**
 * В переменную body получаем сам тег body, чтобы блокировать скролл внутри body
 */
const body = document.querySelector('body');

/**
 * В переменную lockPadding получаем все объекты с классом lock-padding
 */
const lockPadding = document.querySelectorAll('.lock-padding');

/**
 * переменная unlock нужна чтобы не было двойных нажатий
 */
let unlock = true;

/**
 * переменная timeout это таже цифра, которая указана в свойстве transition 0.3s.
 * Эти значения должны быть одинаковы, так как связано с блокировкой скролла и его адекватной работе
 */
const timeout = 300;

/**
 * Вешаем событие на .popup__link
 * Проверка, существуют ли такие ссылки н странице. В цикле бегаем по всем этим ссылкам
 * ПОлучаем кажду в переменную popupLink и на неё вешаем событие click, при котором
 * берём значение атрибута href и убираем из него значок #, где получаем в popupName чистое имя.
 * И далее получаем сам объект попапа в переменную curentPopup получаем элемент, id которого равен popupName.
 * Далее полученный готовый объект отправляем в функцию popupOpen, которая будет заниматься
 * открытием попапа. Поскольку это ссылка, свойством e.preventDefault() запрещаем перегружать страницу,
 * т.е. блокируем работу ссылки!
 */
if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}

/**
 * Это кусок кода для объектов, которые будут попап закрывать. Это любой объект, который находиться внутри
 * попапа и у него есть класс .close-popup. Именно этот класс нужно добавить в HTML в ссылке, которая с крестиком.
 * Далее также проверяем есть ли такие объекты вообще. Опять цикл.
 * Сново получаем конкретный объект - el, на который вешаем событие клик. Только при событиии
 * клик. При событии клик отправляем в функцию popupClose() объект, который является ближайшим родителем
 * нажатой ссылочки с классом popup. Соответственно, при клике на ссылочку (в HTML с крестиком), скрипт
 * будет бегать искать вверх по родителям пока не найдёт объект с классом popup и его будет закрывать.
 * В конце запрещаем дальнейшую работу ссылки.
 */
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

/**
 * Это было всё подготовка.
 * Переходим к функции открытия popup. Передаём готовый объект currentPopup по имени, по идентификатору
 * Далее проверяем, есть ли такой объект И открыта ли переменная unlock (в начале объявлена как открытая true)
 * Далее сразу закрываем открытое popup (переходим в HTML, где создадим второй popup внутри модального окна).
 * Ситуация следующая, в модальном окне есть ссылка на ещё одно модальное окно, поэтому моделируем данную ситуацию.
 * Чтобы это всё работало в const popupActive = document.querySelector('.popup.open'), нужно получить открытый
 * popup, а именно объект с классом .popup, у которого есть класс .open и ЕСЛИ он существует
 * if (popupActive), то закрыть его (popupClose(popupActive, false)). Т.е. отправляем в функцию popupClose()
 * объект popupActive. Если такого нет, то блочим body, т.е. блочим скролл.
 * Далее, после этого всего, к нашему попапу (currentPopup) добавляем класс open. И он у нас открывается.
 * Потому что в CSS задали.
 * Далее к попапу, который открылся сразу вешаем событие при клике, но данным условием
 * if (!e.target.closest('.popup__content')) отсекаем всё, кроме тёмной области. А именно идёт проверка, если
 * у нажатого объекта нету, в родителях, объекта с классом .popup__content, тогда попап закрываем.
 * Т.е. передаем в функцию popupClose() ближайший объект с классом .popup. ЧТо это значит?
 * У нас есть popup__content и при клике на любой объект, внутри popup__content ничего не произойдёт, потому что
 * идёт проверка, ! говорит, что НЕТ. Если нет в родителях popup__content.
 * А нет в родителях popup__content - это всё, что выходит за его пределы, т.е. само затемнение!
 * Это означит, если будем кликать на белую область модального окна ничего не произойдёт, но если кликнуть
 * на затемнение, то модальное окно закроется.
 *
 */
function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

/**
 * В функцию popupClose() передаём активный объект (открытый), помним, что в функции popupOpen() это делаем
 * popupClose(popupActive, false); И также передаём второй параметр, который говорит, что стоит ли использовать
 * блокирование скролла в этот раз или не стоит. Это нужно для того, чтобы могли открывать ещё второй попап.
 * Т.е. открыли первый попап - у нас заблочен скролл (не видно). Когда откроем второй попап, то не нужно открывать
 * скролл, потому что опять открывается второй попап. В этом месте, doUnlock = true, эти моменты упорядочеваются.
 * Т.е. в функции popupOpen() в if (popupActive) {
            popupClose(popupActive, false);
        } else {
 * Когда открываем новый попап, но понимаем, что уже есть какой-то открытый попап, в этот момент (false)
 * запрещаем выполнять bodyUnLock(), т.е. "разлочить" скролл. Мы этого просто не делаем. Скролл остаётся заблочен.
 * Кроме этого,убираем у активного (открытого) попапа класс open (popupActive.classList.remove('open')).
 * И попап закрывается.
 */
function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

/**
 * Что же будет происходить в функции bodyLock()
 * Для начала высчитываем разницу между шириной всего окна и шириной объекта, который находиться внутри него.
 * Делается это для того, чтобы получить ширину скролла, который будем скрывать. В итоге пофиксим сдвиг контента,
 * когда открываем попап, то скролл скрывается, а при закрытии - скролл появляется. В результате чего происходит сдвиг.
 * Получаем эту разницу в перменную lockPaddingValue. Мало того, что присваиваем это значение в body.style.paddingRight
 * в виде паддинга справа. И присваем значение самому body. Т.е. если посмотреть в браузере (F12) код, а именно на body,
 * далее нажав на открытие попапа, то увидим, что к стилям добавляется padding-right: 17px. Т.е. 17px - это результат
 * вычисления. Т.е. скролл равен 17px. КОгда попап закрываем, тогда значение padding-right: 0. И никакого
 * сдвига контента нет.
 * Но плюс к этому делаем цикл. Выше создавали переменную lockPadding для фиксированных объектов.
 * Допустим header фиксирован и если убрать класс lock-padding, то сново будет сдвигаться, но только уже контент
 * самой шапки. В цикле бегаем по всем этим объектам с классом lockPadding и добавляем к каждому тоже самое, что
 * добавляем body - высчитанную разницу. Теперь знаем, что никакой контент дёргаться не будет!
 * Добавили проверку, так как возможно таких объектов существовать не будет. Поэтому есть ли такие объекты вообще?
 * И внизу, начиная с unlock = false, делаем следующее - на время "лочим" переменную unlock. Помним, что в функции
 * popupOpen(), а именно в if (curentPopup && unlock), что во время открытия попапа проверяем открыта ли эта переменная,
 * равна ли она true? И вернём вниз, где её "лочим" пока это всё дело происходит и через какой-то
 * промежуток времени, напомним, что timeout = 300 - нашей анимации в css. Через какое-то время перменную unlock
 * возвращаем true. Это нужно для того, чтобы не было повторных нажатий на попап. Т.е. когда попап открылся
 * и в момент, когда его закрываем, опять как-будто кликаем на попап. И в этом моменте происходит ошибка с фиксированным
 * скроллом. Получается так, что попап открыт, а скролл "не лочится", т.е. не видно было бы его. Для этого
 * приходится ставить замочек timeout чтобы этого не происходило.
 */
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue; // Чтобы увидеть баг комментирую это
        }
    }
    body.style.paddingRight = lockPaddingValue; // и это
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

/**
 * Тут добавляется timeout. Т.е. открываем скролл и убираем padding у body и других объектов только через
 * время. Это нужно, если поменять timeout на 0, то в браузере при открытии попапа всё хорошо, но при
 * закрытии попапа появляется моментально скролл и при этом дёргается сам попап. Поэтому нужен timeout, чтобы
 * скролл появлялся только, когда закончиться анимация, которая в CSS равна 0,3.
 * Когда с этой задержкой убираем ('0px') у наших объектов padding - у body. И у body убираем класс lock, который
 * добавляли в функции bodyLock(). По этому классу будем убирать скролл. Поэтому в CSS для body.lock добавляем
 * overflow: hidden
 * Проверка на наличие объектов if (lockPadding.length > 0), которые требуют добавление padding.
 * Т.е. setTimeout() - это после определённого timeout возвращаем всё на место: убираем padding, показываем скролл.
 * И проделываем с переменной unlock - опять её запираем, чтобы не было глюка при быстром нажатии и
 * через тоже время отпираем
 */
function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

/**
 * Закрытие попапа по кноке Esc. Проверяем какая клавиша нажата и, если клавиша имеет код 27 - это клавиша Esc, то
 * проделываем тоже самое, что и для закрытия попапа, как проделалывали раньше. Т.е. получаем открытый попап popupActive
 * и отправляем этот объект в функцию popupClose(). Попап закрывается.
 */
document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup__open');
        popupClose(popupActive);
    }
});

/**
 * Эти две функции, которые являются полифилами. Полифилы - подгоняют определённый параметр под старые браузеры
 */
(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            let node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

