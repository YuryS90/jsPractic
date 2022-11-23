function f1() {
    let div = document.querySelector('#one');
    // div.innerHTML = div.innerHTML + ' Hello';
    div.innerHTML += ' Hello';
}

f1();

function f2() {
    let div = document.querySelector('#two');
    // div.innerHTML = div.innerHTML + ' Hello';
    div.innerHTML += ' Hello';
}

f2();

//-----------------------------------

function f3() {
    c.innerHTML += ' Hello';
}

let c = document.querySelector('#three');
f3();
c = document.querySelector('#four');
f3();

// ---------------------------------

function f4(Zzz) {
    // Zzzz - id елемента
    let d = document.querySelector('#' + Zzz);
    d.innerHTML += ' Its work ';
}

f4('one');
f4('two');

// --------------------------------

function summa(b, a = 3, c = 4) {
    // if (b) {
    //     b = b;
    // }
    // else {
    //     b = 1;
    // }
    //(b) ? b = b : b = 1;
    return a * b;
}

console.log(summa(3, 4));
console.log(summa(5, 7, 6, 7, 8, 9));