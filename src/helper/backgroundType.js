export const backgroundType = (
	type,
	backgroundColor,
	innerColor,
	outerColor,
) => {
	switch (type) {
		case 'flat':
			return backgroundColor;
		case 'concave':
			return `linear-gradient(145deg, ${innerColor}, ${outerColor})`;
		case 'convex':
			return `linear-gradient(145deg, ${outerColor}, ${innerColor})`;
		default:
			return '';
	}
};
