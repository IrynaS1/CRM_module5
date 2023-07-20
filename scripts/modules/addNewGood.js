import * as elements from './getElements.js';

import goods from './getGoods.js';

import createRow from './createRow.js';

import modalError from './modalError.js';

const addNewGood = (target) => {
	const formData = new FormData(target);
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

						const overlay = document.querySelector('.overlay');
						overlay.style.display = 'none';

						window.location.reload();

						return;
					}

					if ((response.status !== 200) || (response.status !== 201)) {
						console.log('При сохранении произошла ошибка' +
							response.status);

						//окно error
						modalError();

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
};

export default addNewGood;