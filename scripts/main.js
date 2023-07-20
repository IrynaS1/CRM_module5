import * as elements from './modules/getElements.js';

import goods from './modules/getGoods.js';

import renderGoods from './modules/renderGoods.js';

import addNewGood from './modules/addNewGood.js';

import createModal from './modules/createModal.js';

import editGoodForm from './modules/editGoodForm.js';

import changeGood from './modules/changeGood.js';

import deleteGoodGood from './modules/deleteGood.js';
import deleteGood from './modules/deleteGood.js';

{
	const init = () => {
		renderGoods(goods, elements.headTable);

		elements.buttonAddToCard.addEventListener('click', () => {
			createModal();

			const addGood = document.querySelector('.card-order');

			addGood.addEventListener('submit', (e) => {
				e.preventDefault();

				const target = e.target;

				addNewGood(target);
			});

			const closeBtn = document.querySelector('.close__btn_overlay');

			closeBtn.addEventListener('click', () => {
				const overlay = document.querySelector('.overlay');
				overlay.style.display = 'none';
			});
		});

		elements.table.addEventListener('click', e => {
			const target = e.target;

			if (target.classList.contains('form-buttons__button_basket')) {
				deleteGood(target);
			}

			if (target.classList.contains('form-buttons__button_carbon')) {
				const url_image = '../images/phone.jpg';

				const imageHeight = screen.height / 7;

				const imageWidth = screen.width / 3;

				window.open(`${url_image}`, '', `width=600, height=600, top = ${imageHeight}, left=${imageWidth}`);
			}

			if (target.classList.contains('form-buttons__button_edit')) {
				editGoodForm(target);

				const addGood = document.querySelector('.total__button');

				const closeBtn = document.querySelector('.close__btn_overlay');

				closeBtn.addEventListener('click', () => {
					const overlay = document.querySelector('.overlay');
					overlay.style.display = 'none';
				});

				addGood.addEventListener('click', (e) => {
					e.preventDefault();

					const goodId = target.closest('.data-table__items').firstChild.textContent;

					const form = document.querySelector('.form');

					changeGood(goodId, form);

				});
			}
		});
	};

	console.log('goods', goods);

	init();
}

//удаление товара по id
/*  fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/3144111366', {
	method: 'DELETE'
}); 
 */
