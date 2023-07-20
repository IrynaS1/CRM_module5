import createModal from './createModal.js';

const editGoodForm = async (target) => {
	createModal();

	const goodId = target.closest('.data-table__items').firstChild.textContent;

	const loadDGood = async () => {
		const dataGet = await fetch(`https://viridian-beryl-gooseberry.glitch.me/api/goods/${goodId}`);

		const data = await dataGet.json();

		return data;
	};

	const good = await loadDGood();

	const mainTitle = document.querySelector('.title__text_order');
	mainTitle.innerText = 'изменить товар';

	const divTitle = document.querySelector('.title__order-block');
	divTitle.style.display = 'flex';
	divTitle.style.justifyContent = 'space-between';

	const id = document.createElement('p');
	id.classList.add('title__order-id-good');
	id.textContent = `ID:${good.id}`;
	mainTitle.after(id);

	const title = document.querySelector('#title');
	title.value = `${good.title}`;

	const category = document.querySelector('#category');
	category.value = `${good.category}`;

	const units = document.querySelector('#units');
	units.value = `${good.units}`;

	const description = document.querySelector('#description');
	description.value = `${good.description}`;

	const count = document.querySelector('#count');
	count.value = `${good.count}`;

	const price = document.querySelector('#price');
	price.value = `${good.price}`;

	const total = good.count * good.price;

	const totalLine = document.querySelector('.total__count-value');
	totalLine.textContent = `${total}`;

	if (good.discount > 0) {
		const checkbox = document.querySelector('.form__input-line_discount-checkbox');
		checkbox.checked = true;

		const discont = document.querySelector('.form__input-line_discount');
		discont.removeAttribute('disabled');
		discont.value = `${good.discount}`;
	}
};

export default editGoodForm;