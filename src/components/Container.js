import React from 'react';

import { innerSC, outerSC } from '../helper/shadowColor';
import { innerCC, outerCC } from '../helper/containerColor';
import { innerSP, outerSP } from '../helper/shadowPosition';
import { backgroundType } from '../helper/backgroundType';

function Container({
	children,
	type = 'flat',
	borderRadius = 50,
	blurStrength = 25,
	backgroundColor = '#429d7d',
	width = 500,
	height = 500,
	distance = 5,
	innerElementAlignItems = '',
	innerElementJustifyContent = '',
	innerShadowPosition = 'lb',
	outerShadowPosition = 'rt',
	innerElementPadding = 10,
	...props
}) {
	if (!/^#[0-9A-F]{6}$/i.test(backgroundColor)) {
		return null;
	}
	let innerShadowColor = innerSC(backgroundColor);
	let outerShadowColor = outerSC(backgroundColor);

	let innerboxShadow = innerSP(
		innerShadowPosition,
		distance,
		blurStrength,
		innerShadowColor,
	);

	let outerboxShadow = outerSP(
		outerShadowPosition,
		distance,
		blurStrength,
		outerShadowColor,
	);

	let innerColor = innerCC(backgroundColor);
	let outerColor = outerCC(backgroundColor);

	let background;
	if (type === 'pressed') {
		innerboxShadow = 'inset ' + innerboxShadow;
		outerboxShadow = 'inset ' + outerboxShadow;
	} else {
		background = backgroundType(type, backgroundColor, innerColor, outerColor);
	}

	return (
		<div
			{...props}
			style={{
				display: 'flex',
				alignItems: innerElementAlignItems,
				justifyContent: innerElementJustifyContent,
				width,
				height,
				padding: innerElementPadding,
				background,
				borderRadius: `${borderRadius}px`,
				boxShadow: `${innerboxShadow}, ${outerboxShadow}`,
			}}
		>
			{children}
		</div>
	);
}

export default Container;
