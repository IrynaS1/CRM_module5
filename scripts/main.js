import * as elements from './modules/getElements.js';

const load = async () => {
	const dataGet = await fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/');

	const data = await dataGet.json();

	return data;
};

const goods = await load();

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

renderGoods(goods, elements.headTable);

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

			const newGoodPost = async (newGood) => {
				const dataPost = await fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/', {
					method: 'POST',
					body: JSON.stringify(newGood),
					headers: {
						'Content-Type': 'application/json'
					}
				})

					.then(
						function (response) {
							if ((response.status === 200) || (response.status === 201)) {

								console.log('Cохранение прошло успешно ' +
									response.status);

								elements.overlay.classList.remove('overlay__flex');

								window.location.reload();

								return;
							}

							if ((response.status !== 200) || (response.status !== 201)) {
								console.log('При сохранении произошла ошибка' +
									response.status);

								//окно error

								const overlayError = document.querySelector('.overlay-error');
								overlayError.style.display = 'block';

								const closeOverlayError = document.querySelector('.close__btn_error');
								closeOverlayError.addEventListener('click', (e) => {
									overlayError.style.display = 'none';

									const overlayGood = document.querySelector('.overlay');
									overlayGood.classList.add('overlay__flex');
								});

								return;
							}
						}
					)
			};

			//добавление товара на сервер  - post
			newGoodPost(newGood);

			const totalCountMultiplication = newGood.count * newGood.price;

			elements.totalCount.innerHTML = totalCountMultiplication;

			goods.push(newGood);

			createRow(newGood);
		});

		elements.table.addEventListener('click', (e) => {
			if (e.target.classList.contains('form-buttons__button_carbon')) {
				const url_image = '../images/phone.jpg';

				const imageHeight = screen.height / 7;

				const imageWidth = screen.width / 3;

				window.open(`${url_image}`, '', `width=600, height=600, top = ${imageHeight}, left=${imageWidth}`);
			}
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
	};

	init();
}

//удаление товара по id
/* fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/4793861054', {
	method: 'DELETE'
}); */

