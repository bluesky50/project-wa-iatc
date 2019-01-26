import React from 'react';

import WorkSessionList from './WorkSessionList';

const WorkSessionSection = (props) => {
	const { workSessions } = props;
	return (
		<div className="tdc-section">
			<div className="tdc-section__header">
				<p>{props.title}</p>
			</div>
			<div className="tdc-section__body">
				<WorkSessionList workSessions={workSessions}/>
			</div>
		</div>
	);
}

export default WorkSessionSection;