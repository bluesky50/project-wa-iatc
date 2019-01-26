import React from 'react';

import TaskList from './TaskListCombo';

import { AppContext } from '../../AppContext';

import { TASK_ACTIVE } from '../../helpers/constants';

const TaskSection = (props) => {
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
							return task.status === TASK_ACTIVE;
						});
						return <TaskList tasks={activeTasks} timedTaskStartEvents={context.timedTaskStartEvents}/>
					}}
				</AppContext.Consumer>				
			</div>
		</div>
	);
}

export default TaskSection;