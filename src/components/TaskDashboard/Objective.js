import React from 'react';

const Objective = (props) => {
	const { title } = props.objective;
	return (
		<div className="object-container">
			<p>{title}</p>
		</div>
	);
}

export default Objective;