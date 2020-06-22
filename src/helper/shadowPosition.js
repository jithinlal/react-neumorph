export const innerSP = (
	innerShadowPosition,
	distance,
	blurStrength,
	innerShadowColor,
) => {
	switch (innerShadowPosition) {
		case 'lt':
			return `-${distance}px -${distance}px ${blurStrength}px ${innerShadowColor}`;
		case 'lb':
			return `-${distance}px ${distance}px ${blurStrength}px ${innerShadowColor}`;
		case 'rt':
			return `${distance}px -${distance}px ${blurStrength}px ${innerShadowColor}`;
		case 'rb':
			return `${distance}px ${distance}px ${blurStrength}px ${innerShadowColor}`;

		default:
			return '';
	}
};

export const outerSP = (
	outerShadowPosition,
	distance,
	blurStrength,
	outerShadowColor,
) => {
	switch (outerShadowPosition) {
		case 'lt':
			return `-${distance}px -${distance}px ${blurStrength}px ${outerShadowColor}`;
		case 'lb':
			return `-${distance}px ${distance}px ${blurStrength}px ${outerShadowColor}`;
		case 'rt':
			return `${distance}px -${distance}px ${blurStrength}px ${outerShadowColor}`;
		case 'rb':
			return `${distance}px ${distance}px ${blurStrength}px ${outerShadowColor}`;

		default:
			return '';
	}
};
