const addImage = (file) => {
	if (file.size > 1024 * 1024) {
		const warningBlock = document.querySelector('.warning__size-image');

		const warninngParagraph = document.createElement('p');
		warninngParagraph.classList.add('warning__size-image-text');
		warninngParagraph.textContent = 'Изображение не должно превышать размер 1 Мб';

		warningBlock.prepend(warninngParagraph);
	} else {
		const previewBlock = document.querySelector('.add-picture__preview');
		previewBlock.style.display = 'block';

		const src = URL.createObjectURL(file);

		const img = document.querySelector('.add-picture__img');
		img.src = src;
	}
};

export default addImage;