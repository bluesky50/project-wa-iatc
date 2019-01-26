import React from 'react';

import TaskListCombo from './TaskListCombo';

import { AppContext } from '../../AppContext';

const TaskSectionTop = (props) => {
	const { taskStatus } = props;
	return (
		<div className="tdc-section">
			<div className="tdc-section__header">
				<p>{props.title}</p>
			</div>
			<div className="tdc-section__body">
				<AppContext.Consumer>
					{(context) => {
						// console.log('task-section', context.timedTaskStartEvents);
						const activeTasks = context.tasks.filter((task) => {
							return task.status === taskStatus;
						});
						return <TaskListCombo tasks={activeTasks} timedTaskStartEvents={context.timedTaskStartEvents}/>
					}}
				</AppContext.Consumer>				
			</div>
		</div>
	);
}

export default TaskSectionTop;