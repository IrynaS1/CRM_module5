import { modalErrorAddGood } from './modal_addGood.js';

import { goods, renderGoods } from './renderAllGoods.js';

const changeGood = (goodId, form) => {
	console.log('goods in changeGood', goods);
	const data = new FormData(form);

	const newData = Object.fromEntries(data);

	const patchGood = async (newData) => {
		await fetch(`https://viridian-beryl-gooseberry.glitch.me/api/goods/${goodId}`, {
			method: 'PATCH',
			body: JSON.stringify(newData),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	};

	patchGood(newData);

	const totalCountMultiplication = newData.count * newData.price;

	const totalCount = document.querySelector('.total__count-value');
	totalCount.innerHTML = totalCountMultiplication;

	const index = goods.map(function (el) {
		return el.id;
	}).indexOf(goodId);

	if (index !== -1) {
		goods[index] = newData;
	}

	console.log('gooooooooooooooods!!!!!!!!!!!!', goods);

	renderGoods();

	/* .then(
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
	.then((data) => {
		console.log(data);
		// {title: "foo", body: "bar", userId: 1, id: 101}

	})
	.then(res => console.log(res));
*/

};

export default changeGood;