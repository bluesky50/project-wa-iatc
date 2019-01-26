import React from 'react';

const PercentProgressBar = (props) => {
	const { percent, color } = props;

	const height = '24px';
	const section1 = {
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'flex-end',
		background: color,
		borderRadius: '4px 0 0 4px',
		height,
		flex: percent < 100 ? percent : 100
	}

	const section2 = {
		background: 'gray',
		borderRadius: '0 4px 4px 0',
		height,
		flex: percent < 100 ? 100 - percent : 0
	}

	return (
		<div style={{ display: 'flex', width: '100%' }}>
			<div style={section1}>
				<p style={{ padding: '6px', color: 'black'}}>{percent}%</p>
			</div>
			<div style={section2}></div>
		</div>
	)
}

export default PercentProgressBar;