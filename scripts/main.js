'use strict';

const goods = [
	{
		'id': 246016548,
		'title': 'Навигационная система Soundmax',
		'category': 'Техника для дома',
		'units': 'шт',
		'count': 3,
		'price': 100,
	},
	{
		'id': 937295527,
		'title': 'Настольная игра "На 4-х ногах"',
		'category': 'Настольные игры',
		'units': 'шт',
		'count': 12,
		'price': 14,
	},
	{
		'id': 253842678,
		'title': 'Смартфон Xiaomi 11T 8/128GB',
		'category': 'Мобильные телефоны',
		'units': 'шт',
		'count': 2,
		'price': 500,
	},
	{
		'id': 296378448,
		'title': 'Радиоуправляемый автомобиль Cheetan',
		'category': 'Игрушки',
		'units': 'шт',
		'count': 2,
		'price': 22,
	},
	{
		'id': 215796548,
		'title': 'ТВ приставка MECOOL KI',
		'category': 'Игрушки, TV-box',
		'units': 'шт',
		'count': 5,
		'price': 700,
	},
	{
		'id': 246258248,
		'title': 'Витая пара PROConnect 01-0043-3-25',
		'category': 'Кабели',
		'units': 'шт',
		'count': 10,
		'price': 20,
	},
];

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

const table = document.querySelector('.data-table');

table.addEventListener('click', e => {
	const target = e.target;

	if (target.classList.contains('form-buttons__button_basket')) {
		let tr = target.closest('.data-table__items');

		let id = tr.firstChild.nextSibling.innerText;

		let ind = goods.findIndex((good) => {
			return good.id == id;
		});

		goods.splice(ind, 1);

		tr.remove();
	}
	console.log('База данных после удаления', goods);
});

