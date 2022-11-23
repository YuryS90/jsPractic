"use strict";
//ajax(url, method, functionName, dataArray) {
// POST -> date = '2018-12-30'


document.querySelector('button').onclick = function () {
    let input = document.querySelector('#inp-date');
    let date = { "date": input.value };
    ajax('datetime.php', 'POST', showTime, date);
}



function showTime(data) {
    // Раскодируем строку ответа с сервера
    data = JSON.parse(data);
    console.log(data);
    alert(data.F);
}
