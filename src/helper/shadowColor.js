import convert from 'color-convert';

export const innerSC = (backgroundColor) => {
	const cmykBackgroundColor = convert.hex.cmyk(backgroundColor.slice(1));
	const innerShadowCMYKColor = [...cmykBackgroundColor];
	const black = cmykBackgroundColor[3];
	innerShadowCMYKColor.splice(3, 1, black < 20 ? 0 : black - 20);
	const innerShadowColor = `#${convert.cmyk.hex(innerShadowCMYKColor)}`;

	return innerShadowColor;
};

export const outerSC = (backgroundColor) => {
	const cmykBackgroundColor = convert.hex.cmyk(backgroundColor.slice(1));
	const outerShadowCMYKColor = [...cmykBackgroundColor];
	const black = cmykBackgroundColor[3];
	outerShadowCMYKColor.splice(3, 1, black > 80 ? 100 : black + 20);
	const outerShadowColor = `#${convert.cmyk.hex(outerShadowCMYKColor)}`;

	return outerShadowColor;
};
