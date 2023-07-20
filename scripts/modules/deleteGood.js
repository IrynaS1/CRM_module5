import goods from './getGoods.js';

const deleteGood = (target) => {
	let tr = target.closest('.data-table__items');

	let goodId = tr.firstChild.innerText;

	let ind = goods.findIndex((good) => {
		return good.id == id;
	});

	goods.splice(ind, 1);

	tr.remove();

	fetch(`https://viridian-beryl-gooseberry.glitch.me/api/goods/${goodId}`, {
		method: 'DELETE'
	});
};

export default deleteGood;