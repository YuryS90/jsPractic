/* Task 2*/
let task_2 = document.querySelector(".task-2");
for(let i = 0; i <= 101; i++){
    if(i==100){
        task_2.innerHTML += `${i}. `;
        break;
    }
    if(i % 2 == 0) {
        task_2.innerHTML += `${i}, `;
    }
}

/* Task 3 */
let task_3 = document.querySelector(".task-3");
for(let i = 200; i >= 0; i--){
    if(i==0){
        task_3.innerHTML += `${i}. `;
        break;
    }
    task_3.innerHTML += `${i}, `;
   
}

/* Task 4 */
let task_4 = document.querySelector(".task-4");
let sum_4 = 0;
    for(let i = 0; i<=100; i++){
        sum_4 += i;
    }
    task_4.innerHTML += `${sum_4}`;

/* Task 5 */

let number = document.querySelector("#num-input");
let degree = document.querySelector("#degree-input");
let bttn_5   = document.querySelector("#btn-5");
let relo   = document.querySelector("#reload");
let result = 1;
bttn_5.onclick = _ =>{
    if(!isNaN(parseFloat(number.value)) && isFinite(number.value) && !isNaN(parseFloat(degree.value)) && isFinite(degree.value)){
        if(degree.value == ~~degree.value){
            if(degree.value >= 0){
                for(let i = 0; i < degree.value; i++){
                    result*=number.value;
                }
            }
            else{

                for(let i = 0; i > degree.value; i--){
                    result*=number.value;
                }
                result = 1/result;
            }
        }
        else{
            alert("Please input integer number");
           document.querySelector("#res").innerHTML = `Result: `;
           return 1;
        }

    } 
    else {
        alert("incorrect input")
        document.querySelector("#res").innerHTML = `Result: `;
        return 1;
    }
    document.querySelector("#res").innerHTML = `Result: ${result}`;
}

relo.onclick = _ =>{
    document.location.reload();
}

/* Task 6 */
let task_6 = document.querySelector(".task-6");
let num = 7;
for (let i = 1; i<=9; i++){
    task_6.innerHTML += `<p>${i} * ${num} = ${i*7}</p>`;
}


/* Task 7 */
let task_7 = document.querySelector(".task-7");
let res_7 = 1;
for(let i = 1; i <= 50; i++){
    res_7 *= i;
}
task_7.innerHTML += res_7

/* Task 8 */
let task_8 = document.querySelector(".task-8");
for(let i = 1000; i <= 2000; i++){
    task_8.innerHTML += `&#${i} `;
}

/* Task 9 */
let par_9 = document.querySelectorAll(".main-9 p");
for(let i = 0; i< par_9.length; i++){
    par_9[i].insertAdjacentText("afterbegin", (i+1) + " ");
}

/* Task 10 */

let day = document.querySelector('#day-input');
let month = document.querySelector('#month-input');
let bttn_10 = document.querySelector("#btn-10");

bttn_10.onclick = _ =>{
    let arr_10 = ["Козерог","Водолей","Рыбы","Овен","Телец","Близнеци","Рак", "Лев", "Дева", "Весы","Скорпион","Стрелец"]
let m = month.value;
let d = day.value;
if(!isNaN(parseFloat(m)) && isFinite(m) && !isNaN(parseFloat(d)) && isFinite(d)){
  if(d>=1 && d <= 31){
    switch(m){
      case "1": (d <= 20)  ? alert(arr_10[0]) : alert(arr_10[1]);
      break;
      case '2':(d <= 18) ? alert(arr_10[1]) : alert(arr_10[2]);
      break;
      case '3': (d <= 20) ? alert(arr_10[2]) : alert(arr_10[3]);
      break;
      case '4':
      (d <= 19) ? alert(arr_10[3]) : alert(arr_10[4]);
      break;
      case '5':
      (d <= 20) ? alert(arr_10[4]) : alert(arr_10[5]);
      break;
      case '6':
      (d <= 21) ? alert(arr_10[5]) : alert(arr_10[6]);
      break;
      case '7':
      (d <= 22) ? alert(arr_10[6]) : alert(arr_10[7]);
      break;
      case '8':
      (d <= 22) ? alert(arr_10[7]) : alert(arr_10[8]);
      break;
      case '9':
      (d <= 22) ? alert(arr_10[8]) : alert(arr_10[9]);
      break;
      case '10':
      (d <= 23) ? alert(arr_10[9]) : alert(arr_10[10]);
      break;
      case '11':
      (d <= 22) ? alert(arr_10[10]) : alert(arr_10[11]);
      break;
      case '12':
      (d <= 21) ? alert(arr_10[11]) : alert(arr_10[0]);
      break;
      default: console.log("incorrect month");
      break;
    }
  }
  else{
    console.log("incorrect day");
  }
}
else{
  console.log("incorrect input");
}  
}

/* Task 11 */

let span_11 = document.querySelectorAll(".span-11");

for(let i = 0; i < span_11.length; i++){
    span_11[i].style.color = "yellow";
}

/* Task 12 */

let paragInfo_12 = document.querySelectorAll(".p-12");
let result_12 = document.querySelector(".result-12");
result_12.innerHTML = `<span>Result: ${paragInfo_12.length}</span>`;

/* Task 13 */
let arr_13 = [1,0,0,0,0,0];
let div_13 = document.querySelector(".arr-13");
let btn_13 = document.querySelector("#btn-13");
div_13.innerHTML = arr_13;

btn_13.onclick = ( _ =>{
    let i = 0;
    let temp = arr_13[i];
    return function(){
        if(i != arr_13.length-1){
            arr_13[i] = arr_13[i+1];
            arr_13[i+1] = temp;
            i++;
            }
        else {
             return 1;
            }
            div_13.innerHTML = arr_13;
    }
})();

/* Task 14 */
let task_14 = document.querySelector(".task-14");
let arr_14 = [1, 2, 3, -9, -15, 1.8, -1,3, 10, 4];
let k_14 = 0;
for(let i = 0; i<arr_14.length; i++){
    if(arr_14[i]<0){
        k_14++;
    }
}

task_14.innerHTML += `<p>${arr_14}</p>количество элементов массива меньше нуля = ${k_14}`;

/* var 2*/
// let arr_14 = [1, 2, 3, -9, -15, 1.8, -1,3, 10, 4];
// let k_14 = arr_14.filter(el => el < 0);
// alert(arr_14 + " количество элементов массива меньше нуля = " + k_14.length);

/* Task 15 */
let task_15 = document.querySelector(".task-15");
let arr_15 = [1, 2, 3, -9, -15, 1.8, -1,3, 10, 4];
let res_15 = arr_15.filter(el => el < 0);
task_15.innerHTML += `<p>${arr_15}</p> элементы массива меньше нуля = ${res_15}`;

/* Task 16 */
let conteiner_16 = document.querySelector(".main-16");
let len_16 = document.querySelector("#length-array-16");
let bttn_16 = document.querySelector("#btn-16");

bttn_16.onclick = _ =>{
    let arr_16 = [];
    for(let i = 0; i < len_16.value; i++){
        arr_16.push(1);
    }
    conteiner_16.insertAdjacentHTML("beforeend", `<div>${arr_16}</div>`);
}

/* Task 17 */

let conteiner_17 = document.querySelector(".main-17");
let len_17 = document.querySelector("#length-array-17");
let bttn_17 = document.querySelector("#btn-17");

function rand(min, max){
    return Math.floor(Math.random()*(max - min + 1)) + min;
}

bttn_17.onclick = _ =>{
    let arr_17 = [];
    for(let i = 0; i < len_17.value; i++){
        arr_17.push(rand(0, 100));
    }
    conteiner_17.insertAdjacentHTML("beforeend", `<div>${arr_17}</div>`);
}


/* Task 18 */
let conteiner_18 = document.querySelector(".main-18");
let arr1 = ['dfsd', 1, 2, "sdfsd", 12, 'sdfdsf'];
let arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] == "number" && !isNaN(arr1[i])) {
        arr2.push(arr1[i]);
    }
}
conteiner_18.innerHTML += `<div>Array 1 : ${arr1}</div><div>Array 2 : ${arr2}</div>`;

/* Task 19 */
let conteiner_19 = document.querySelector(".main-19");
let arr_19 = [1, 2, 3, -9, -15, 1.8, -1, 3, 10, 4];
let max = 0;

for (let i = 0; i < arr_19.length; i++) {
    if (arr_19[i] > max) {
        max = arr_19[i];
    }
}
conteiner_19.innerHTML += arr_19;
conteiner_19.innerHTML += `<div>Max: ${max}</div`;
// let max = Math.max(...arr_19);
// conteiner_19.innerHTML += max;

/* Task 20 */
let conteiner_20 = document.querySelector(".main-20");
let arr_20 = [1, 2, 3, 4, 3, 1];
let obj = {};
let key, k = 1;
for (let i = 0; i < arr_20.length; i++) {
    key = arr_20[i];
    if (obj.hasOwnProperty(key)) {
        obj[key] = ++k;
    }
    else {
        obj[key] = 1;
    }
}

let result_20 = JSON.stringify(obj).slice(1, JSON.stringify(obj).length - 1).split(",");

conteiner_20.innerHTML += `<p>Array: ${arr_20}</p>`;
conteiner_20.innerHTML += `<p>Statistics</p>`;
for (let i = 0; i < result_20.length; i++) {
    conteiner_20.innerHTML += `<p>${result_20[i]}</p>`
}



