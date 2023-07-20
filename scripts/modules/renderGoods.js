const renderGoods = (goods, headTable) => {
	goods.forEach((good) => {
		const total = good.count * good.price;

		const row = document.createElement('tr');
		row.classList.add('data-table__items');
		row.innerHTML = `<td class="data-table__item" id="id">${good.id}</td>
		<td class="data-table__item">${good.title}</td>
		<td class="data-table__item">${good.category}</td>
		<td class="data-table__item data-table__item_color">${good.units}</td>
		<td class="data-table__item data-table__item_align">${good.count}</td>
		<td class="data-table__item data-table__item_align">$${good.price}</td>
		<td class="data-table__item data-table__item_align">$<span
				class="data-table__item-sum">${total}</span></td>
		<td class="form-buttons data-table__item data-table__item_icons">
			<button class="form-buttons__button form-buttons__button_carbon"></button>
			<button class="form-buttons__button form-buttons__button_edit"></button>
			<button class="form-buttons__button form-buttons__button_basket"></button>
		</td>
		`;

		headTable.after(row);
	});

	const totalAll = document.querySelectorAll('.data-table__item-sum');

	let totalArray = [];

	for (let i = 0; i < totalAll.length; i++) {
		const num = Number(totalAll[i].textContent);

		totalArray.push(num);
	}

	const totalSumElement = document.querySelector('.total__count-text__sum');

	const totalSum = totalArray.reduce((function (acc, val) {
		return acc + val;
	}));

	totalSumElement.textContent = totalSum;
};

export default renderGoods;