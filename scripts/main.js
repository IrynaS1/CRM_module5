import * as elements from './modules/getElements.js';

import renderGoods from './modules/renderAllGoods.js';

import {
	createModalAddGood,
	modalErrorAddGood,
} from './modules/modal_addGood.js';

import editGood from './modules/modalEdit.js';

{
	renderGoods();

	const init = () => {
		elements.buttonAddToCard.addEventListener('click', () => {
			createModalAddGood();

			const modal = document.querySelector('.overlay');
			modal.classList.add('overlay__flex');

			const modalCloseDtn = document.querySelector('.close__btn');

			modalCloseDtn.addEventListener('click', () => {
				const modal = document.querySelector('.overlay');
				modal.classList.remove('overlay__flex');
			});

			const checkboxDiscont = document.querySelector('.form__input-line_discount-checkbox');

			const discontText = document.querySelector('.form__input-line_discount');

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

				const newGoodPost = async (newGood) => {
					const dataPost = await fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/', {
						method: 'POST',
						body: JSON.stringify(newGood),
						headers: {
							'Content-Type': 'application/json',
						}
					})

						.then(
							function (response) {
								if ((response.status === 200) || (response.status === 201)) {

									console.log('Cохранение прошло успешно ' +
										response.status);

									const modal = document.querySelector('.overlay');
									modal.classList.remove('overlay__flex');

									window.location.reload();

									return;
								}

								if ((response.status !== 200) || (response.status !== 201)) {
									console.log('При сохранении произошла ошибка' +
										response.status);

									//окно error
									modalErrorAddGood();

									const overlayError = document.querySelector('.overlay-error');
									overlayError.style.display = 'block';

									const closeOverlayError = document.querySelector('.close__btn_error');
									closeOverlayError.addEventListener('click', (e) => {
										e.preventDefault();

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

				const totalCount = document.querySelector('.total__count-value');
				totalCount.innerHTML = totalCountMultiplication;

				goods.push(newGood);

				createRow(newGood);
			});
		});


		elements.table.addEventListener('click', e => {
			e.preventDefault();

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

		elements.table.addEventListener('click', (e) => {
			e.preventDefault();

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

		elements.table.addEventListener('click', e => {
			e.preventDefault();

			if (e.target.classList.contains('form-buttons__button_edit')) {
				editGood(e);
			}
		});

	};

	init();
}

//удаление товара по id
/* fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/5151689445', {
	method: 'DELETE',
}); */

