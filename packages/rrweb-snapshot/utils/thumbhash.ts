import { rgbaToDataURL } from 'thumbhash';

export async function htmlImageElementToThumbhashDataUrl(
	image: HTMLImageElement,
) {
	await new Promise((resolve) => {
		image.onload = resolve;
	});

	// 100x100 maximum size
	const size = Math.max(image.width, image.height);
	const width = Math.round(100 * image.width / size);
	const height = Math.round(100 * image.height / size);

	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d')!;
	canvas.width = width;
	canvas.height = height;
	ctx.drawImage(image, 0, 0, width, height);
	const pixels = ctx.getImageData(0, 0, width, height);
	return rgbaToDataURL(width, height, pixels.data);
}
