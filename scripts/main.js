import * as elements from './modules/getElements.js';

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

{
	const init = () => {
		elements.buttonAddToCard.addEventListener('click', () => {
			elements.overlay.classList.add('overlay__flex');
		});

		elements.closeBtn.addEventListener('click', () => {
			elements.overlay.classList.remove('overlay__flex');
		});

		elements.table.addEventListener('click', e => {
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

		elements.checkboxDiscont.addEventListener('click', () => {
			if (elements.discontText.hasAttribute('disabled') === true) {
				elements.discontText.removeAttribute('disabled');
			} else {
				elements.discontText.value = '';
				elements.discontText.setAttribute('disabled', 'disabled');
			}
		});

		elements.addGood.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(e.target);

			const newGood = Object.fromEntries(formData);

			const totalCountMultiplication = newGood.count * newGood.price;

			elements.totalCount.innerHTML = totalCountMultiplication;

			goods.push(newGood);

			createRow(newGood);
		});

		const createRow = (newGood) => {
			const tr = document.createElement('tr');
			tr.classList.add('data-table__items');

			const totalCountMultiplicationValue = elements.totalCountMulti.textContent;

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

			elements.headTr.after(tr);

			let sumGoodsArray = [];

			for (let i = 0; i < elements.sumEl.length; i++) {
				sumGoodsArray.push(Number(elements.sumEl[i].textContent));
			}

			const totalSumGoods = sumGoodsArray.reduce(function (sum, el) {
				return sum + el;
			});

			elements.totalCountLine.textContent = totalSumGoods;
		};
	};

	init();
}