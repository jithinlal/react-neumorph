import convert from 'color-convert';

export const innerCC = (backgroundColor) => {
	const cmykColor = convert.hex.cmyk(backgroundColor.slice(1));
	const innerCMYKColor = [...cmykColor];
	const blackPercent = cmykColor[3];
	innerCMYKColor.splice(3, 1, blackPercent < 10 ? 0 : blackPercent - 10);
	const innerColor = `#${convert.cmyk.hex(innerCMYKColor)}`;

	return innerColor;
};

export const outerCC = (backgroundColor) => {
	const cmykColor = convert.hex.cmyk(backgroundColor.slice(1));
	const outerCMYKColor = [...cmykColor];
	const blackPercent = cmykColor[3];
	outerCMYKColor.splice(3, 1, blackPercent > 90 ? 100 : blackPercent + 10);
	const outerColor = `#${convert.cmyk.hex(outerCMYKColor)}`;

	return outerColor;
};
