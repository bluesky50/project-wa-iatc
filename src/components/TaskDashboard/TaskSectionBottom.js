import React from 'react';

import TaskList from './TaskList';

import { AppContext } from '../../AppContext';

const TaskSectionBottom = (props) => {
	const { taskStatus } = props;
	return (
		<AppContext.Consumer>
			{(context) => {
				// console.log('task-section', context.timedTaskStartEvents);
				const activeTasks = context.tasks.filter((task) => {
					return task.status === taskStatus;
				});
				return <TaskList tasks={activeTasks} timedTaskStartEvents={context.timedTaskStartEvents}/>
			}}
		</AppContext.Consumer>
	);
}

export default TaskSectionBottom;