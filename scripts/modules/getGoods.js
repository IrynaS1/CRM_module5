const load = async () => {
	const dataGet = await fetch('https://viridian-beryl-gooseberry.glitch.me/api/goods/');

	const data = await dataGet.json();

	return data;
};

const goods = await load();

export default goods;