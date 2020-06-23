import React, { useState, useEffect } from 'react';

import { innerSC, outerSC } from '../helper/shadowColor';
import { innerCC, outerCC } from '../helper/containerColor';
import { innerSP, outerSP } from '../helper/shadowPosition';
import { backgroundType } from '../helper/backgroundType';

function ButtonGroup({
	children,
	type = 'convex',
	borderRadius = 10,
	blurStrength = 10,
	backgroundColor = '#429d7d',
	width = 300,
	height = 50,
	distance = 5,
	innerElementAlignItems = 'center',
	innerElementJustifyContent = 'center',
	innerShadowPosition = 'lb',
	outerShadowPosition = 'rt',
	innerElementPadding = 0,
	firstButton = '',
	secondButton = '',
	thirdButton = '',
	onClickFunc = () => {},
	...props
}) {
	const [firstBackground, setFirstBackground] = useState('');
	const [secondBackground, setSecondBackground] = useState('');
	const [thirdBackground, setThirdBackground] = useState('');

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
		let background = backgroundType(
			type,
			backgroundColor,
			innerColor,
			outerColor,
		);
		setFirstBackground(background);
		setSecondBackground(background);
		setThirdBackground(background);
	}, [type, backgroundColor, innerColor, outerColor]);

	if (!/^#[0-9A-F]{6}$/i.test(backgroundColor)) {
		return null;
	}
	return (
		<div
			{...props}
			style={{
				cursor: 'pointer',
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				width,
				height,
				alignItems: innerElementAlignItems,
				justifyContent: innerElementJustifyContent,
				background: firstBackground,
				borderRadius: `${borderRadius}px`,
				boxShadow: `${innerboxShadow}, ${outerboxShadow}`,
			}}
		>
			<div
				onClick={() => {
					setFirstBackground(
						backgroundType('concave', backgroundColor, innerColor, outerColor),
					);
					setSecondBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					setThirdBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					onClickFunc(1);
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '100%',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					borderTopLeftRadius: `${borderRadius}px`,
					borderBottomLeftRadius: `${borderRadius}px`,
					background: firstBackground,
				}}
			>
				{firstButton}
			</div>
			<div
				onClick={() => {
					setFirstBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					setSecondBackground(
						backgroundType('concave', backgroundColor, innerColor, outerColor),
					);
					setThirdBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					onClickFunc(2);
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '100%',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					background: secondBackground,
				}}
			>
				{secondButton}
			</div>
			<div
				onClick={() => {
					setFirstBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					setSecondBackground(
						backgroundType('convex', backgroundColor, innerColor, outerColor),
					);
					setThirdBackground(
						backgroundType('concave', backgroundColor, innerColor, outerColor),
					);
					onClickFunc(3);
				}}
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '100%',
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
					height: '100%',
					borderTopRightRadius: `${borderRadius}px`,
					borderBottomRightRadius: `${borderRadius}px`,
					background: thirdBackground,
				}}
			>
				{thirdButton}
			</div>
		</div>
	);
}

export default ButtonGroup;
