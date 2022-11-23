$('.collapse').collapse(); //-аккордеон
/********************************************/
//-задание 1

let showAllNumbers = document.querySelector('.show-all-numbers'); //-кнопка
let blockForNumbers = document.querySelector('.all-numbers');

showAllNumbers.onclick = function(){

	if(showAllNumbers.getAttribute('data-role') == 'empty'){

		for(var i=0; i < 100; i++){

		let	arrayOneElement = `<div class="numBlock__item"> ${i} </div>`;
		blockForNumbers.innerHTML += arrayOneElement;

	 	}


		blockForNumbers.style.borderWidth = 2+'px'; //-задаем рамку блоку с числами
		showAllNumbers.setAttribute('data-role','full'); //-меняем атрибут у кнопки
	}
	//-не выводим одно и то же многократно
	else{
		alert('Числа уже выведены! 😎')
	}
}




//-задание 2
let showEvenNumbers = document.querySelector('.show-even-numbers'); //-кнопка
let blockOneNum = document.querySelector('.numBlock__item'); //- блок для одного числа
let blockAllNumbers = document.querySelector('.numBlock'); //- блок для вывода чисел

let oneElement;

showEvenNumbers.onclick = function(){
	//- запускаем цикл, только если числа не выведены на экран
	if(showEvenNumbers.getAttribute('data-role') == 'empty'){

		for(var i=0; i <= 101; i+= 2){

			oneElement = `<div class="numBlock__item"> ${i} </div>`;
			blockAllNumbers.innerHTML += oneElement;
	 	}


		blockAllNumbers.style.borderWidth = 2+'px'; //-задаем рамку блоку с числами
		showEvenNumbers.setAttribute('data-role','full'); //-меняем атрибут у кнопки
	}
	//-не выводим одно и то же многократно
	else{
		alert('Четные числа уже выведены! 😎')
	}

}



//-задание 3
let showReversNumbers = document.querySelector('.show-numbers'); //-кнопка
let blockReversNumbers = document.querySelector('.reversNumBlock'); //- блок для вывода чисел
// let reverseNumbersArray =[];

showReversNumbers.onclick = function(){
	//- запускаем цикл, только если числа не выведены на экран
	if(showReversNumbers.getAttribute('data-role') == 'empty'){

		for(var i=200; i >= 0; i--){

			oneElement = `<div class="numBlock__item"> ${i} </div>`;
			// reverseNumbersArray.push(oneElement);
			blockReversNumbers.innerHTML += oneElement;

		 }


		blockReversNumbers.style.borderWidth = 2+'px'; //-задаем рамку блоку с числами
		showReversNumbers.setAttribute('data-role','full'); //-меняем атрибут у кнопки
	}
	//-не выводим массив многократно
	else{
		alert('Результат на экране! 😎');
	}

}

//-задание 4
let getSummButton = document.querySelector('.summ-numbers'); //-кнопка
let summResult = document.querySelector('.summ-input'); //-куда выводим результат


getSummButton.onclick = function(){

	let summ = 0;

	for( let k=0; k <= 100; k++ ){

		summ = summ + k;
		 // ЗНАЧЕНИЕ СУММЫ ПРИСВАИВАЕТСЯ В КАЖДОМ ШАГЕ ЦИКЛА, ХОТЯ ДОСТАТОЧНО ТОЛЬКО ПОД КОНЕЦ
	}

	summResult.value = summ;
}

//-задание 5  возведение в степень
let buttonShowResult = document.querySelector('.buttonShowResult'); //- кнопка
let blockForResult = document.querySelector('.power-result'); //-куда выводим результат


buttonShowResult.onclick = function(){

	let basisNumber = parseInt(document.querySelector('.basis-number').value); //-переводим в число считаное из инпута значение
	let powerNumber = parseInt(document.querySelector('.power-number').value); //-переводим в число считаное из инпута значение
	let actionResult = 1; //-результат вычисления, стартуем со значения =1;



	//-не допускаем пустые поля
	if(basisNumber == basisNumber && powerNumber == powerNumber ){

		//-основание не должно быть равным нулю
		if(basisNumber == 0){
			alert('Основание не должно быть равным нулю! 😎');
		}

		//-положительная степень
		if(powerNumber > 0){
			for(let n = 1 ; n<= powerNumber; n++){

				actionResult *= basisNumber;
				blockForResult.value = actionResult; // ЗНАЧЕНИЕ ПРИСВАИВАЕТСЯ В КАЖДОМ ШАГЕ ЦИКЛА, ХОТЯ ДОСТАТОЧНО ТОЛЬКО ПОД КОНЕЦ

			}
		}
		//-отрицательная степень

		else if(powerNumber < 0){
			powerNumber = Math.abs(powerNumber); //-берем модуль отрицат степени

			for( n = 1 ; n <= powerNumber; n++){

				actionResult *= basisNumber;
			}

			blockForResult.value = 1/actionResult;

		}
		else {
			blockForResult.value = 1; //-если степень=0
			alert('Любое число в нулевой степени =1 😎 !!!')
		}
	}

	//-если есть пустые поля
	else{
		alert('Как же посчитать, если есть незаполненные поля 😎')
	}
}


//-задание 6  Таблица умножения на 7

let buttonShowTable = document.querySelector('.buttonShowTable'); //-кнопка
let multiplicationResult = document.querySelector('.multiplication-resultbox');
let tableString;
let multiplicationTable=[];

buttonShowTable.onclick = function(){
	let number = 7;

	if(this.getAttribute('data-role') == 'passive'){

		for(let i = 0; i < 10; i++ ){
				tableString = i * number;

				multiplicationTable.push(`<div class="numBlock__item"> 7 * ${i} = ${tableString}</div>`);
				newMultiplication = multiplicationTable.join(''); //- фу,еле -еле избавилась от запятых по умолчанию

				// console.table(`7 * ${i} = ${tableString} `);
			}

			multiplicationResult.innerHTML =newMultiplication;
			this.setAttribute('data-role','active');
		}

	else{
		alert('Все!!!  Кнопка работает 1 раз! Таблица на экране! ')
	}

}


//-задание 7  факториал(если первое число =1) или перемножение чисел массива
let getMultiplicationButton = document.querySelector('.get-multiplication-result'); //-кнопка
let showResult = document.querySelector('.showResult'); //-куда выводим результат


getMultiplicationButton.onclick = function(){

	let firstNumber = parseInt(document.querySelector('.multiplication-first-number').value); //-переводим в число считаное из инпута значение
	let lastNumber = parseInt(document.querySelector('.multiplication-last-number').value); //-переводим в число считаное из инпута значение
	let multiplication = 1; //-стратуем умножение с единицы


	//-проверяем на заполненность полей
	if(firstNumber == firstNumber && lastNumber == lastNumber){

		if(firstNumber > lastNumber){

			alert('Ошибка! Последнее число массива не может быть меньше первого!')
		}
		else{

			for( let k= firstNumber; k <= lastNumber; k++ ){

				multiplication *= k;
				// showResult.value = multiplication;

			}
			showResult.value = multiplication;
		}
	}
	//-если есть пустое поле
	else{
		alert('Есть пустые поля!!!!')
	}
}


//-задание 8 спецсимволы
let showSimbolsBtn = document.querySelector('.show-simbols');
let simbolsBox = document.querySelector('.simbol-block');

showSimbolsBtn.onclick = function(){
	for( i = 1000; i <= 2000; i++ ){
		let simbolNum = `<div class="numBlock__item">&#${i};</div>`;
		simbolsBox.innerHTML += simbolNum;
	}

}

//-задание 9 нумерация параграфов
let getParagrafeNumber = document.querySelector('.paragrafe-number');//-кнопка
let textParagrafeArray =[]; //-массив под параграфы

getParagrafeNumber.onclick = function(){

	if(textParagrafeArray.length == 0){

		textParagrafeArray = document.querySelectorAll('.text-side');

		for( i=0; i < textParagrafeArray.length; i++ ){
			let numValue = `<span class='paragrafe-num'>${i+1}.</span>`
			textParagrafeArray[i].insertAdjacentHTML('afterbegin', numValue);
		}
	}
	else{
		alert('Все пронумеровано!!!')
	}
}

//- задание 10 zoo


let zodiacSings = [];

let userZodiacSing;
let boxForZodiacSings = document.querySelector('.zodiac-sings');
let userBirtDay = document.querySelector('.birthDay');
let userBirtMn = document.querySelector('.birthMn');
let btnInquireZodiac = document.querySelector('.inquire-zodiac'); //-кнопка

btnInquireZodiac.onclick = function() {

 	let getbirthDay = parseInt(userBirtDay.value);
 	let getbirthMn = parseInt(userBirtMn.value);

	userBirtDay = parseInt(getbirthDay) + parseInt((getbirthMn*100));


	 //-поля не должны быть пустыми
	  if( getbirthDay != getbirthDay || getbirthMn != getbirthMn){
	    alert('Есть незаполненные поля!');
	    return;
	  }
	  //-значения полей должны должны быть в рамках диапазона
	  else if(getbirthMn > 12 ||getbirthMn < 1 || getbirthDay >31 || getbirthDay <1){
	    alert('Некорректное значение, проверьте пожалуйста!');
	    return;
	  }

   //- границы дат для знаков зоодика так же переводим в числа по формуле для даты рождения
  else if(userBirtDay > 120 && userBirtDay <= 218) {
    userZodiacSing = '<span class="zoo-card">Водолей</span>';
  }
  else if (userBirtDay > 219 && userBirtDay <= 320) {
     userZodiacSing = '<span class="zoo-card">Рыбы</span>';
  }
  else if (userBirtDay >= 321 && userBirtDay < 419) {
     userZodiacSing = '<span class="zoo-card">Овен</span>';
  }
  else if (userBirtDay >= 420 && userBirtDay < 520) {
     userZodiacSing = '<span class="zoo-card">Телец</span>';
  }
  else if (userBirtDay >= 521 && userBirtDay < 621) {
     userZodiacSing = '<span class="zoo-card">Близнецы</span>';
  }
  else if(userBirtDay > 622 && userBirtDay <= 722) {
     userZodiacSing = '<span class="zoo-card">Рак</span>';
  }
  else if (userBirtDay > 723 && userBirtDay <= 822) {
     userZodiacSing = '<span class="zoo-card">Лев</span>';
  }
  else if (userBirtDay >= 823 && userBirtDay < 922) {
     userZodiacSing = '<span class="zoo-card">Дева</span>';
  }
  else if (userBirtDay >= 923 && userBirtDay < 1022) {
     userZodiacSing = '<span class="zoo-card">Весы</span>';
  }
  else if (userBirtDay >= 1023 && userBirtDay < 1122) {
     userZodiacSing = '<span class="zoo-card">Скорпион</span>';
  }
  else if (userBirtDay >= 1123 && userBirtDay < 1221) {
     userZodiacSing = '<span class="zoo-card">Стрелец</span>';
  }
  else {
     userZodiacSing = '<span class="zoo-card">Козерог</span>';
  }

	zodiacSings += userZodiacSing;

	boxForZodiacSings.innerHTML = zodiacSings;

	userBirtDay.value = '';
	userBirtMn.value = '';

}


//-#11-12 покрасить спаны

let itemsSpan = document.querySelectorAll('span');
let itemsParagrafePart = document.querySelectorAll('p');
 document.querySelector('.color-span').onclick = function(){

 	for( i = 0; i< itemsSpan.length; i++ ){

 	 	itemsSpan[i].style.backgroundColor = 'yellow';

 	 }
 	 let ParagrafePartNumber = itemsParagrafePart.length;
 	document.querySelector('#text-block').insertAdjacentHTML('afterend', `<div class='paragrafe-num'>Количество параграфов: ${ParagrafePartNumber}</div>`);



 }

//-#13 перемещение внутри массива

let numberArray = [1 ,0, 0, 0, 0, 0];
document.querySelector('#array-block').innerHTML = numberArray;

document.querySelector('.btn-remove-item').onclick = function(){
	for( i = 1; i< numberArray.length; i++){
		if ( numberArray[i-1] == 1){

			numberArray[i] = 1;
			numberArray[i-1] =0;

			document.querySelector('#array-block').innerHTML = numberArray;
			return;
		}

	}

}

//-#14-15 работа с массивом, выбор отрицат чисел

let myCustomArray = [5, 6, -8, 0, -4, 25, -48, 60, -60, -5, 74, -7];
let btnGetNegativeNumbers = document.querySelector('.btn-custom-array'); //-кнопка
let negativeCount =0; //-счетчик отрицат чисел
let boxForCustomArray = document.querySelector('#custom-array'); //-выводим массив
let boxForCount = document.querySelector('#negative-numbers-count'); //-кол-во счетчик отриц чисел
let boxForNegativeNumbers = document.querySelector('#negative-numbers'); //-выводим значения отриц чисел

//-при загрузке документа сразу выводим массив на страницу
outArray(myCustomArray, boxForCustomArray);

 function outArray(arrName, outBoxName){
	for( i= 0; i< arrName.length; i++){

		outBoxName.innerHTML += `<span class="number-box">${arrName[i]}, </span>`;
	}
		outBoxName.style.display = 'block';
}

btnGetNegativeNumbers.onclick = function(){

	for( i= 0; i< myCustomArray.length; i++){
		if( myCustomArray[i] < 0){
			 negativeCount ++;

			 boxForCount.innerHTML = `Количество отрицательных чисел: <span class="number-box"> ${negativeCount}</span>`;
			 boxForNegativeNumbers.innerHTML +=  `<span class="number-box">${myCustomArray[i]}, </span>`;
		}
		boxForNegativeNumbers.style.display = 'block';
	}
}

//-#16 создать массив указанной длины

let btnOutArray = document.querySelector('.btn-out-array'); //-кнопка
let outResultingArray = document.querySelector('.input-out-array');
let arrayBlock = document.querySelector('.array-block');

btnOutArray.onclick = function(){

	let arrayLengthValue = parseInt(document.querySelector('.input-array-length').value);

	if( arrayLengthValue > 0){

		if( outResultingArray.textContent == ''){

				for( i=0; i < arrayLengthValue; i++ ){
				outResultingArray.innerHTML += 1 + '<span class="comma">,<span>';
				}
				arrayBlock.style.display = 'block';
			}
			else {
				alert('Массив выводится 1 раз!');
			}
		}
	else{

		alert('Введено не корректное значение для длины массива!');
	}
}




//-#17 создать массив указанной длины

let btnOutRandomArray = document.querySelector('.btn-out-array--random'); //-кнопка
let outResultingRandomArray = document.querySelector('.input-out-array--random');
let randomArrayBlock = document.querySelector('.random-array-block');

//-ф-ция произвольного числа
function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

btnOutRandomArray.onclick = function(){

	let randomArrLengthValue = parseInt(document.querySelector('.input-randomarray-length').value);


	if( randomArrLengthValue > 0){

		if( outResultingRandomArray.textContent == ''){

				for( i=0; i < randomArrLengthValue; i++ ){
				// outResultingArray.innerHTML += 1 + '<span class="comma">,<span>';

				outResultingRandomArray.innerHTML += randomInteger(0, 100) + '<span class="comma">,<span>';
				}
				randomArrayBlock.style.display = 'block';
			}
			else {
				alert('Массив выводится 1 раз!');
			}
	}
	else if(randomArrLengthValue <= 0){
		alert( 'Введите, пожалуйста любое положительное число!');
	}

	else{
		alert( 'Укажите длину массива, пожалуйста!');
	}
}

//-#18 массив из чисел и строк

let myRandomArray = [5, 'лето', 38, 10, 'зима', 25, 148, 'весна', 60, 15, 'осень', 77];
let btnfilterRandomArray = document.querySelector('.btn-filter-array'); //-кнопка
let boxForRandomArray = document.querySelector('#random-array'); //-выводим исходный массив
let myFilterArrow =[];
let boxForOnlyNumbers = document.querySelector('#only-numbers'); //-выводим новый массив

//-используем вышеобъявленную ф-цию и сразу выводим массив на страницу
outArray(myRandomArray, boxForRandomArray );

btnfilterRandomArray.onclick = function(){

	for( i = 0; i < myRandomArray.length; i++){

		if(typeof(myRandomArray[i]) == 'number'){

			myFilterArrow += `<span class="number-box">${myRandomArray[i]}, </span>`;
			boxForOnlyNumbers.innerHTML = myFilterArrow ;
		}

	}
}

//-#19 массив из чисел и строк

let myNumberArray = [5, 102, 75, 101, 2, 25, 148, 2004, 60, 15, 532, 77];
let btnGetMaxValue = document.querySelector('.btn-max-value'); //-кнопка
let boxForNumberArray = document.querySelector('#number-array'); //-выводим исходный массив
let boxForMaxValue = document.querySelector('#max-number'); //-выводим максимум
let maxValue =0;
//-используем вышеобъявленную ф-цию и сразу выводим массив на страницу
outArray( myNumberArray, boxForNumberArray );

btnGetMaxValue.onclick = function(){


	if( btnGetMaxValue.getAttribute('data-action') == 'noclick'  ){
		btnGetMaxValue.setAttribute('data-action','click');
		for( i = 0; i < myNumberArray.length; i++){

			if( myNumberArray[i] > maxValue ){
				maxValue = myNumberArray[i];
			}

		}
			boxForMaxValue.innerHTML += `<span class="number-box">${maxValue}!</span>`;
	}

}

//-#20 повторы в массиве

let myBigArray = [5, 2, 5, 75, 101, 5, 2, 5, 148, 75, 60, 5, 532, 77];
let getRepeatValue = document.querySelector('.btn-repeat-value'); //-кнопка
let boxForBigArray = document.querySelector('#big-array'); //-выводим исходный массив


//-используем вышеобъявленную ф-цию и сразу выводим массив на страницу
outArray( myBigArray, boxForBigArray );

getRepeatValue.onclick = function(){

	let repeatNumber;
	let numberCount = 1;

	//-выстраиваем числа в массиве по возрастанию
	var mySortedArray = myBigArray.sort(function(a, b) {
			return a - b;
		});



	for(var i = 1; i < mySortedArray.length; i++){

			if(mySortedArray[i-1]==mySortedArray[i]){
				numberCount++
			}
			else{
				console.log(`число ${mySortedArray[i-1]} встречается ${numberCount} раз`);
				numberCount = 1;
			}

		}
		//-выводим сведения о последнем элементе массива
		console.log(`число ${mySortedArray[mySortedArray.length-1]} встречается ${numberCount} раз`);

	}