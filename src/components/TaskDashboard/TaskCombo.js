import React, { Component } from 'react';

import TaskProgress from './TaskProgress';
import TaskInfo from './TaskInfo';

class Task extends Component {
	renderTaskProgress() {
		if (this.props.taskData) {
			// const { timedPercent, timedDuration, totalWorkDurationPercent, totalWorkDuration } = this.props.taskData;
			const { task, taskData, actions } = this.props;
			return <TaskProgress active={true} task={task} taskData={taskData} actions={actions}/>;
		}
	}

	render() {
		// const completionPercent = totalTimeLogged + (now-currentStartTime) //
		const { task, actions }  = this.props;
		return (
			<div className="task-container">
				<TaskInfo task={task} actions={actions} />
				{this.renderTaskProgress()}
			</div>
		);
	}
}

export default Task;