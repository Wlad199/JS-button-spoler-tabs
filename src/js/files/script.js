// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})


//! ====================================================================================================//
//* Open/Close Block ====================================================================================================//

const buttonOne = document.querySelector('.show-block__button')
const blockOne = document.querySelector('.show-block__text')

function showCloseBlock() {
	blockOne.classList.toggle('_hidden')
}

function changeText() {
	if (blockOne.classList.contains('_hidden')) {
		buttonOne.textContent = 'open block'
	} else {
		buttonOne.textContent = 'close block'
	}
}

// 2 wariant =====

//function changeText() {
//	if (blockOne.classList.toggle('_hidden')) {
//		buttonOne.textContent = 'open block'
//	} else {
//		buttonOne.textContent = 'close block'
//	}
//}

buttonOne.addEventListener('click', showCloseBlock)
buttonOne.addEventListener('click', changeText)


//!  ====================================================================================================//
//* accardeon ====================================================================================================//

const titleAccardeon = document.querySelectorAll('[data-name="accardeon"]')
const subText = document.querySelectorAll('.accardeon__sub-text')


// Простое открытие и закрытие ================

//function showContent() {
//	this.nextElementSibling.classList.toggle('_hidden-content')
//}

// Открытие одного и закрытие всех ================

//function showContent() {
//	subText.forEach(el => {
//		el.classList.add('_hidden-content')
//	});
//	this.nextElementSibling.classList.remove('_hidden-content')
//}

// Вариант с закрытием при повторном нажатии =========================

function showContent() {
	if (this.nextElementSibling.classList.contains('_hidden-content')) {
		subText.forEach(el => {
			el.classList.add('_hidden-content')
		})
		this.nextElementSibling.classList.remove('_hidden-content')
	} else {
		subText.forEach(el => {
			el.classList.add('_hidden-content')
		});
	}
}

titleAccardeon.forEach(i => {
	i.addEventListener('click', showContent)
});


//!  ====================================================================================================//
//* Tabs ====================================================================================================//

const tabHeaders = document.querySelectorAll("[data-tab]")
const tabContent = document.querySelectorAll("[data-tab-content]")


function showTabs() {
	const contentBox = document.querySelector('#' + this.dataset.tab)
	tabContent.forEach(function (i) {
		i.classList.add('_hidden')
	})
	contentBox.classList.remove('_hidden')
}

// Другая запись того же кода ==============

//tabHeaders.forEach(i => {
//	i.addEventListener('click', function () {
//		const contentBox = document.querySelector('#' + this.dataset.tab)
//		tabContent.forEach(i => {
//			i.classList.add('_hidden')
//		});
//		contentBox.classList.remove('_hidden')
//	})
//});

tabHeaders.forEach(i => {
	i.addEventListener("click", showTabs)
});