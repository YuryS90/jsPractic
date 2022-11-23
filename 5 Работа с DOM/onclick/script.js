//"use strict";

// При помощи присвоения, по клику будем вызывать функцию
// Важно! По событию после функции не указываются " () ".
// Если указать (), то функция выполнится сразу при загрузке страницы!
// Чтобы при нажатии всплывало модальное окно, его первым делом нужно спрятать

let btn = document.querySelector('#btn');

function cons() {
    console.log('Hello');
}

btn.onclick = cons;

let modal = document.querySelector('#modal-show');

function show() {
    let d = document.querySelector('.modal');

    d.style.display = 'block';
}

modal.onclick = show;

// Лучше не делать через ownerDocument, получается что работает только один button

//=============================================================
// function hello() {
//     console.log('Hello');
//     hello2();
// }
//
// function hello2() {
//     console.log('hello-2-2-2-22');
// }
//
//
// let btn = document.querySelector('#btn'); // кнопка
// console.log(btn.id);
// btn.onclick = hello;
// // hello();
// //btn.hidden = true;
//
//
// let showModal = document.querySelector('#modal-show'); // кнопку show modal
//
// function show() {
//     let modal = document.querySelector('.modal');
//     //modal.hidden = true;
//     modal.style.display = 'block';
//     modal.style.backgroundColor = 'pink';
// }
//
// showModal.onclick = show;
//border-radius: 20px;
//border  - 5px;