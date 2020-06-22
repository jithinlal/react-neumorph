import React, { useState, useEffect } from 'react';

import { innerSC, outerSC } from '../helper/shadowColor';
import { innerCC, outerCC } from '../helper/containerColor';
import { innerSP, outerSP } from '../helper/shadowPosition';
import { backgroundType } from '../helper/backgroundType';

function Button({
	children,
	type = 'convex',
	borderRadius = 50,
	blurStrength = 50,
	backgroundColor = '#429d7d',
	width = 500,
	height = 500,
	distance = 25,
	innerElementAlignItems = '',
	innerElementJustifyContent = '',
	innerShadowPosition = 'lb',
	outerShadowPosition = 'rt',
	innerElementPadding = 0,
	onClickFunc = () => {},
}) {
	const [background, setBackground] = useState('');
	const [clicked, setClicked] = useState(false);

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

	useEffect(() => {
		setBackground(
			backgroundType(type, backgroundColor, innerColor, outerColor),
		);
	}, [type, backgroundColor, innerColor, outerColor]);

	if (!/^#[0-9A-F]{6}$/i.test(backgroundColor)) {
		return null;
	}
	return (
		<div
			onClick={() => {
				setBackground(
					backgroundType(
						clicked ? 'convex' : 'concave',
						backgroundColor,
						innerColor,
						outerColor,
					),
				);
				setClicked((oldState) => !oldState);
				onClickFunc();
			}}
			style={{
				cursor: 'pointer',
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

export default Button;
