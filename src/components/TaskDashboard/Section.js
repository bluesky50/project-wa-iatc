import React from 'react';

import TaskList from './TaskList';

const Section = (props) => {
	// const { tasks } = props;
	return (
		<div className="tdc-section">
			<div className="tdc-section__header">
				<p>Section Title</p>
			</div>
			<div className="tdc-section__body">
				<TaskList/>
			</div>
		</div>
	);
}

export default Section;