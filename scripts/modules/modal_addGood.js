import * as elements from './getElements.js';

import loadstyle from './loadStyle.js';

const createModalAddGood = () => {
	loadstyle('../styles_order/overlay.css');

	const modal = document.createElement('div');
	modal.classList.add('overlay');

	modal.innerHTML = `<div class="card card-order">
	<div class="close">
		<button class="close__btn">&#10006;</button>
	</div>

	<div class="title title__order">
		<h1 class="title__text title__text_order">Добавить ТОВАР</h1>

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

				<div class="form__element form__element_measurement">
					<p class="form__input-margin">
						<label for="units" class="form__input-title">Единицы измерения</label>
					</p>
					<input type="text" name="units" id="units" class="form__input-line" required>
				</div>

				<div class="form__element form__element_discount">
					<p class="form__input-margin">
						<label for="discount" class="form__input-title">Дисконт</label>
					</p>
					<div class="discount__items">
						<input type="checkbox" name="is-discount" id="discount"
							class="form__input-line form__input-line_discount-checkbox">
						<input type="text" name="code-discount" id="discount"
							class="form__input-line form__input-line_discount" disabled required>
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
					<button class="add-picture__btn">Добавить изображение</button>
				</div>
			</form>
		</div>

		<div class="total">
			<div class="total__count">
				<p class="total__count-text">Итоговая стоимость:
					<span class="total__count-text total__count-text_color">
						<strong>$<span class="total__count-value">900.00</span>
						</strong></span>
				</p>
			</div>

			<div class="total__add-to-card">
				<button type="submit" form="form-order" class="total__button">Добавить товар</button>
			</div>
		</div>

	</div>
</div>`;

	elements.wrapper.prepend(modal);
};

const modalErrorAddGood = () => {
	const modalError = document.createElement('div');
	modalError.classList.add('overlay-error');

	modalError.innerHTML = `<div class="error">
	<div class="close">
		<button class="close__btn close__btn_error">&#10006;</button>
	</div>
	<div class="error__img"></div>
	<div class="error__message">
		<p class="error__message-text">Что-то пошло не так</p>
	</div>
</div>`;

	elements.wrapper.prepend(modalError);
}

export {
	createModalAddGood,
	modalErrorAddGood,
};