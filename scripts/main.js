'use strict';

const overlay = document.querySelector('.overlay');

const mainTitle = document.querySelector('.title__text');

const idOfGood = document.querySelector('.title__id-good');

const formOrder = document.querySelector('.card-box');

const checkboxDiscont =
	document.querySelector('.form__input-line_discont-checkbox');

const discontText = document.querySelector('.form__input-line_discont');

const totalCount = document.querySelector('.total__count-text_color');

const buttonAddToCard = document.querySelector('.cms-order');

buttonAddToCard.addEventListener('click', () => {
	overlay.classList.add('overlay__flex');
});

const closeBtn = document.querySelector('.close__btn');

closeBtn.addEventListener('click', () => {
	overlay.classList.remove('overlay__flex');
});

overlay.addEventListener('click', () => {
	overlay.classList.remove('overlay__flex');
});


