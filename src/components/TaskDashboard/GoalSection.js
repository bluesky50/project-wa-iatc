import React from 'react';

import GoalList from './GoalList';

import { AppContext } from '../../AppContext';

const GoalSection = (props) => {
	const { taskThreadsStatus } = props;
	return (
		<div className="tdc-section">
			<div className="tdc-section__header">
				<p>{props.title}</p>
			</div>
			<div className="tdc-section__body">
				<AppContext.Consumer>
					{(context) => {
						// console.log('task-section', context.timedTaskStartEvents);
						const taskThreads = context.taskThreads.filter((taskThread) => {
							return taskThread.status === taskThreadsStatus;
						});
						return <GoalList taskThreads={taskThreads}/>
					}}
				</AppContext.Consumer>		
				
			</div>
		</div>
	);
}

export default GoalSection;