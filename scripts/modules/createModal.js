import * as elements from './getElements.js';

import loadstyle from './loadStyle.js';

const createModal = () => {
	const renderOverlay = () => {
		loadstyle('../styles_order/overlay.css');

		const modal = document.createElement('div');
		modal.classList.add('overlay');

		modal.innerHTML = `<div class="card card-order">
		<div div class="close">
			<button class="close__btn close__btn_overlay">&#10006;</button>
	</div>
	<div class="title title__order">
		<div class="title title__order">
			<div class="title__order-block">
				<h1 class="title__text title__text_order">Добавить ТОВАР</h1>
			</div>
		<div class="title__underline"></div>
	</div>
	<div class="card-container">
		<div class="card-box">
			<form id="form-order" class="form" method="post" action="#">
				<div class="form__element form__element_product">
					<p class="form__input-margin">
						<label for="title" class="form__input-title">Наименование</label>
					</p>
					<input type="text" name="title" id="title" class="form__input-line" required>
				</div>
				<div class="form__element form__element_category">
					<p class="form__input-margin">
						<label for="category" class="form__input-title">Категория</label>
					</p>
					<input type="text" name="category" id="category" class="form__input-line" required>
				</div>
				<div class="form__element form__element_units">
					<p class="form__input-margin">
						<label for="units" class="form__input-title">Единицы измерения</label>
					</p>
					<input type="text" name="units" id="units" class="form__input-line" required>
				</div>
				<div class="form__element form__element_discont">
					<p class="form__input-margin">
						<label for="discont" class="form__input-title">Дисконт</label>
					</p>
					<div class="discont__items">
						<input type="checkbox" name="is-discont" id="discont"
							class="form__input-line form__input-line_discont-checkbox">
						<input type="text" name="code-discont" id="discont"
							class="form__input-line form__input-line_discont" disabled required>
					</div>
				</div>
				<div class="form__element form__element_description">
					<p class="form__input-margin">
						<label for="description" class="form__input-title">Описание</label>
					</p>
					<textarea name="description" id="description" cols="30" rows="6"
						class="form__input-line form__input-line_description" required></textarea>
				</div>
				<div class="form__element form__element_count">
					<p class="form__input-margin">
						<label for="count" class="form__input-title">Количество</label>
					</p>
					<input type="number" name="count" id="count" class="form__input-line" required>
				</div>
				<div class="form__element form__element_price">
					<p class="form__input-margin">
						<label for="price" class="form__input-title">Цена</label>
					</p>
					<input type="number" name="price" id="price" class="form__input-line" required>
				</div>
				<div class="form__element add-picture">
					<button class="add-picture__btn">
						<span class="add-picture__btn-text">Добавить изображение</span>
					</button>
				</div>
			</form>
		</div>
		<div class="total">
			<div class="total__count">
				<p class="total__count-text">Итоговая стоимость:
					<span class="total__count-text total__count-text_color">
						<strong>$<span class="total__count-value">0</span>
						</strong></span>
				</p>
			</div>
			<div class="total__add-to-card">
				<button type="submit" form="form-order" class="total__button">
					<span class="total__button-text">Добавить товар</span>
				</button>
			</div>
		</div>
	</div>
</div >`;

		elements.wrapper.prepend(modal);
	};

	renderOverlay();

	const checkboxDiscont =
		document.querySelector('.form__input-line_discont-checkbox');

	const discontText = document.querySelector('.form__input-line_discont');

	checkboxDiscont.addEventListener('click', () => {
		if (discontText.hasAttribute('disabled') === true) {
			discontText.removeAttribute('disabled');
		} else {
			discontText.value = '';
			discontText.setAttribute('disabled', 'disabled');
		}
	});
};

export default createModal;