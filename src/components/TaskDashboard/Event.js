import React from 'react';

const Event = (props) => {
	const { eventTitle, createdAt } = props.event;
	const date = new Date(createdAt);
	return (
		<div className="task-container">
			<div className="task-info">
				<p>{date.toString()}</p>
				<p>{eventTitle}</p>
			</div>
		</div>
	)
}

export default Event;