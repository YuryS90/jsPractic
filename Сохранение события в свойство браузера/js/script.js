let one = document.querySelector('#one');

console.log(one);

function myClick() {
    console.log('click');
    one.onclick = null; // чтобы выполнилось 1 раз
    let two = document.querySelector('#two');
    two.onclick = myClick2;
}

function myClick2() {
    console.log(2222);
    let two = document.querySelector('#two');
    two.onclick = myClick3;
}

function myClick3() {
    console.log('wooooork!!!');
}

one.onclick = myClick;