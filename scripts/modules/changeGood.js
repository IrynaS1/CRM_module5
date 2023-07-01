import { modalErrorAddGood } from './modal_addGood.js';

const changeGood = async (goodId, form) => {
	const data = new FormData(form);

	const newData = Object.fromEntries(data);
	console.log('newData', newData);
	await fetch(`https://viridian-beryl-gooseberry.glitch.me/api/goods/${goodId}`, {
		method: 'PATCH',
		body: JSON.stringify(newData),
		headers: {
			'Content-Type': 'application/json',
		}
	})
	/* 		.then(
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
			) */
};

export default changeGood;