import * as elements from './getElements.js';

import goods from './getGoods.js';

import renderGoods from './renderGoods.js';

const changeGood = async (goodId, form) => {

	const data = new FormData(form);

	const newData = Object.fromEntries(data);

	const patchGood =
		await fetch(`https://viridian-beryl-gooseberry.glitch.me/api/goods/${goodId}`, {
			method: 'PATCH',
			body: JSON.stringify(newData),
			headers: {
				'Content-Type': 'application/json',
			},
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
			);

	const totalCountMultiplication = newData.count * newData.price;

	const totalCount = document.querySelector('.total__count-value');
	totalCount.innerHTML = totalCountMultiplication;

	const index = goods.map(function (el) {
		return el.id;
	}).indexOf(goodId);

	if (index !== -1) {
		goods[index] = newData;
	}

	renderGoods(goods, elements.headTable);
};

export default changeGood;