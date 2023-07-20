import * as elements from './getElements.js';

const createRow = (newGood) => {
	const tr = document.createElement('tr');
	tr.classList.add('data-table__items');

	const totalCountMulti = document.querySelector('.total__count-value');

	const totalCountMultiplicationValue = totalCountMulti.textContent;

	tr.innerHTML = `<td class="data-table__item"></td>
<td class="data-table__item">${newGood.title}</td>
<td class="data-table__item">${newGood.category}</td>
<td class="data-table__item data-table__item_color">${newGood.units}</td>
<td class="data-table__item data-table__item_align">${newGood.count}</td>
<td class="data-table__item data-table__item_align">${newGood.price}</td>
<td class="data-table__item data-table__item_align">
<span class="data-table__item-sum">${totalCountMultiplicationValue}</span></td>
<td class="form-buttons data-table__item data-table__item_icons">
<button class="form-buttons__button form-buttons__button_carbon" data-pic="../images/phone.jpg"></button>
<button class="form-buttons__button form-buttons__button_edit"></button>
<button class="form-buttons__button form-buttons__button_basket"></button>
</td>`;

	elements.headTable.after(tr);

	let sumGoodsArray = [];

	const sumEl = document.querySelectorAll('.data-table__item-sum');

	for (let i = 0; i < sumEl.length; i++) {
		const s = Number(sumEl[i].textContent);

		sumGoodsArray.push(s);
	}

	const totalSumGoods = sumGoodsArray.reduce(function (sum, el) {
		return sum + el;
	});

	elements.totalCountLine.textContent = totalSumGoods;
};

export default createRow;