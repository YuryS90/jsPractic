let applyButton = document.querySelector('.change-background'); //-кнопка
let colorForBg; //-цвет из инпута
let documentBody = document.querySelector('body');//-тег body

applyButton.onclick = function(){
	colorForBg = document.querySelector('.color-input').value;//-присвоим выбранный цвет переменной

	documentBody.style.backgroundColor = colorForBg;//- применяем цвет к фону
}


//---------меняем цвета фона и шрифта---------//

let applyColorsButton = document.querySelector('.change-colors'); //-кнопка применить
let resetColorsButton = document.querySelector('.reset-colors'); //-кнопка сбросить


applyColorsButton.onclick = function (){
	let colorBg = document.querySelector('.color-bg').value;//-присвоим выбранный цвет переменной
	let colorFont = document.querySelector('.color-font').value;//-присвоим выбранный цвет переменной

	documentBody.style.backgroundColor = colorBg;//- применяем цвет к фону
	documentBody.style.color = colorFont;//- применяем цвет к фону
}
resetColorsButton.onclick = function(){

	documentBody.style.backgroundColor = 'rgb(255,255,255)';
	documentBody.style.color = 'rgb(0,0,0)';
}


//---------меняем ползунком размер шрифта---------//


let textBlock = document.querySelector('.text-group-paragrafe'); //-текстовый блок

function changeFontSizeNum(){
	let fontSizeValue = document.querySelector('.range-input').value;//-значение ползунка
	textBlock.style.fontSize = fontSizeValue +'px';
	document.querySelector("#fontSizeNum").innerHTML = fontSizeValue;
}

//---------меняем цвет квадрата---------//

let colorBlock = document.querySelector('.color-block'); //блок, который красим

function applyColor(){

	let colorFirstNum = document.querySelector('.range-input-one').value;  //-значения ползунков
	let colorTwoNum = document.querySelector('.range-input-two').value; //-значения ползунков
	let colorThreetNum = document.querySelector('.range-input-three').value; //-значения ползунков

	colorBlock.style.backgroundColor = `rgb( ${colorFirstNum}, ${colorTwoNum},  ${colorThreetNum})`;

	colorBlock.innerHTML = `<div class='innerText'>rgb( ${colorFirstNum}, ${colorTwoNum},  ${colorThreetNum})</div>`;

}