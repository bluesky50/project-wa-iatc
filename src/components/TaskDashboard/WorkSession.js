import React from 'react';

import { millisToMinutesAndSeconds } from '../../helpers/time';

const WorkSession = (props) => {
	const { taskId, title, startTime, endTime } = props.session;
	const duration = endTime - startTime;
	return (
		<div className="task-container">
			<div className="task-info">
				<p>{title} - #{taskId}</p>
				<p>{millisToMinutesAndSeconds(duration)}</p>
			</div>
		</div>
	);
}

export default WorkSession;