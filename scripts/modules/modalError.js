import * as elements from './getElements.js';

const modalError = () => {
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
};

export default modalError;