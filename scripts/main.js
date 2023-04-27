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

const totalCount = document.querySelector('.total__count-value');

const buttonAddToCard = document.querySelector('.cms-order');

buttonAddToCard.addEventListener('click', () => {
	overlay.classList.add('overlay__flex');
});

const closeBtn = document.querySelector('.close__btn');

closeBtn.addEventListener('click', () => {
	overlay.classList.remove('overlay__flex');
});

/* overlay.addEventListener('click', () => {
	overlay.classList.remove('overlay__flex');
}); */

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

checkboxDiscont.addEventListener('click', () => {
	if (discontText.hasAttribute('disabled') === true) {
		discontText.removeAttribute('disabled');
	} else {
		discontText.value = '';
		discontText.setAttribute('disabled', 'disabled');
	}
});

const addGood = document.querySelector('.card-order');

addGood.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);

	const newGood = Object.fromEntries(formData);

	const newGoodCount = document.querySelector('.card-order');

	const totalCountMultiplication = newGood.count * newGood.price;

	//console.log('totalCountMultiplication', totalCountMultiplication);

	totalCount.innerHTML = totalCountMultiplication;

	goods.push(newGood);

	createRow(newGood);
});

const createRow = (newGood) => {
	const tr = document.createElement('tr');
	tr.classList.add('data-table__items');

	const totalCountMultiplicationValue = document.querySelector('.total__count-value').textContent;

	tr.innerHTML = `<td class="data-table__item"></td>
	<td class="data-table__item">${newGood.title}</td>
	<td class="data-table__item">${newGood.category}</td>
	<td class="data-table__item data-table__item_color">${newGood.units}</td>
	<td class="data-table__item data-table__item_align">${newGood.count}</td>
	<td class="data-table__item data-table__item_align">$${newGood.price}</td>
	<td class="data-table__item data-table__item_align">$
		<span class="data-table__item-sum">${totalCountMultiplicationValue}</span></td>
	<td class="form-buttons data-table__item data-table__item_icons">
		<button class="form-buttons__button form-buttons__button_carbon"></button>
		<button class="form-buttons__button form-buttons__button_edit"></button>
		<button class="form-buttons__button form-buttons__button_basket"></button>
	</td>`;

	const headTr = document.querySelector('.data-table__head-items');

	headTr.after(tr);

	const sumEl = document.querySelectorAll('.data-table__item-sum');

	let sumGoodsArray = [];

	for (let i = 0; i < sumEl.length; i++) {
		sumGoodsArray.push(Number(sumEl[i].textContent));
	}

	const totalSumGoods = sumGoodsArray.reduce(function (sum, el) {
		return sum + el;
	});

	const totalCountLine = document.querySelector('.total__count-text__sum');
	totalCountLine.textContent = totalSumGoods;
}

