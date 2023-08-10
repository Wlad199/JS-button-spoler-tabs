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
//  ================================

tabHeaders.forEach(i => {
	i.addEventListener("click", showTabs)
});


//!  ====================================================================================================//
//* Modal Windows ====================================================================================================//

// 1 variant =====================
/*
const modalButton = document.querySelector('[data-modal-button]')
const modalBlock = document.querySelector('.modal__block')
const modalWindow = modalBlock.querySelector('.modal__window')
const modalButtonClose = document.querySelector('.window-block__button')
const blockBody = document.body

function openModal() {
	modalBlock.classList.add('_active')
	blockBody.classList.add('blocked')
}

function closeModal() {
	modalBlock.classList.remove('_active')
	blockBody.classList.remove('blocked')
}

modalButton.addEventListener('click', openModal)
modalButtonClose.addEventListener('click', closeModal)
modalBlock.addEventListener('click', closeModal)


// Запрещаем всплытие кликов у окна попапа

modalWindow.addEventListener('click', function (event) {
	event.stopPropagation()
})
*/

// 2 variant (Одной функцией) =====================
/*
const modalOpenButton = document.querySelector('[data-modal-button]')
const modalBlock = document.querySelector('[data-modal]')

modalOpenButton.addEventListener('click', function () {

	// Добавляем класс _active
	modalBlock.classList.add('_active')

	// Убираем класс _active при нажатии на кнопку
	const modalCloseButton = modalBlock.querySelector('[data-modal-close]')
	modalCloseButton.addEventListener('click', function () {
		modalBlock.classList.remove('_active')
	})

	// Убираем класс _active при нажатии на любое место
	modalBlock.addEventListener('click', function () {
		modalBlock.classList.remove('_active')
	})

	// Запрещаем закрытие при клике на попап (останавливаем всплытие)
	const modalWindow = modalBlock.querySelector('[data-modal-window]')
	modalWindow.addEventListener('click', function (event) {
		event.stopPropagation()
	})
})
*/

//!  ====================================================================================================//
//* Modal Windows (Universal method) ====================================================================================================//

const buttonOpenModal = document.querySelectorAll('[data-modal-button]')
const buttonCloseModal = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')
const allModalWindows = document.querySelectorAll('[data-modal-window]')
//console.log(allModalWindows);

//? Открытие по клику на закрывающую кнопку
buttonOpenModal.forEach(i => {
	i.addEventListener('click', function () {

		// С помощью this выбираем именно ту кнопку, на которую кликнули.
		// Получаем в уонстанту содержитое атрибута кнопки data-modal-button="modal-##"
		const modalId = this.dataset.modalButton

		// Находим и получаем в константу модальное окно с id="modal-#"
		const modal = document.querySelector('#' + modalId)

		// Добавляем ему класс _active
		modal.classList.add('_active')
	})
});

//? Закрытие по клику на закрывающую кнопку
buttonCloseModal.forEach(function (item) {
	item.addEventListener('click', function () {

		// С помощью this выбираем именно ту кнопку, на которую кликнули.
		// С помощью closest находим родителя с дата фтрибутом [data-modal]
		const modal = this.closest('[data-modal]')

		// Забираем класс у найденного родителя
		modal.classList.remove('_active')
	})
})

//? Закрытие по клику на пустую область

allModals.forEach(function (item) {

	// С активной модалки убираю класс _active
	item.addEventListener('click', function () {
		this.classList.remove('_active')
	})
})

//? Запрещаем закрытие при клике на попап (останавливаем всплытие)
allModalWindows.forEach(i => {
	i.addEventListener('click', function (event) {
		event.stopPropagation()
	})
});