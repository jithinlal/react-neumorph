import React, { useState, useEffect } from 'react';

import { innerSC, outerSC } from '../helper/shadowColor';
import { innerCC, outerCC } from '../helper/containerColor';
import { innerSP, outerSP } from '../helper/shadowPosition';
import { backgroundType } from '../helper/backgroundType';

function RoundButton({
	children,
	type = 'convex',
	backgroundColor = '#429d7d',
	radius = 50,
	innerElementAlignItems = 'center',
	innerElementJustifyContent = 'center',
	innerShadowPosition = 'lb',
	outerShadowPosition = 'rt',
	innerElementPadding = 0,
	blurStrength = 10,
	onClickFunc = () => {},
	...props
}) {
	const borderRadius = radius / 2;
	const [background, setBackground] = useState('');
	const [clicked, setClicked] = useState(false);

	let innerShadowColor = innerSC(backgroundColor);
	let outerShadowColor = outerSC(backgroundColor);

	let innerboxShadow = innerSP(
		innerShadowPosition,
		5,
		blurStrength,
		innerShadowColor,
	);

	let outerboxShadow = outerSP(
		outerShadowPosition,
		5,
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
			{...props}
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
				width: radius,
				height: radius,
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

export default RoundButton;
