import React from 'react';
import '../index.css';

import { innerSC, outerSC } from '../helper/shadowColor';
import { innerSP, outerSP } from '../helper/shadowPosition';

function Switch({
	isOn,
	handleToggle,
	borderRadius = 10,
	blurStrength = 10,
	backgroundColor = '#429d7d',
	distance = 5,
	width = 60,
	height = 30,
	innerShadowPosition = 'lb',
	outerShadowPosition = 'rt',
	...props
}) {
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
	return (
		<div {...props}>
			<input
				checked={isOn}
				onChange={handleToggle}
				className='react-switch-checkbox'
				id={`react-switch-new`}
				type='checkbox'
			/>
			<label
				style={{
					background: isOn && backgroundColor,
					boxShadow: `${innerboxShadow}, ${outerboxShadow}`,
					width,
					height,
				}}
				className='react-switch-label'
				htmlFor={`react-switch-new`}
			>
				<span
					style={{
						boxShadow: `${innerboxShadow}, ${outerboxShadow}`,
						// width: width - width / 2 - 5,
						// height: height - 5,
					}}
					className={`react-switch-button`}
				/>
			</label>
		</div>
	);
}

export default Switch;
