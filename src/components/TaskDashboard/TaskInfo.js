import React, { Component } from 'react';

import { TASK_ACTIVE, TASK_COMPLETE, TASK_QUEUED } from '../../helpers/constants';

import { AppContext } from '../../AppContext';

import { convertTaskStatusToString } from '../../helpers/statusHelpers';

export default class TaskInfo extends Component {
	render() {
		const { id, title, status } = this.props.task;
		// const { actions } = this.props;
		return (
			<div className="task-info">
				<p>{title} #{id} - status: {convertTaskStatusToString(status)}</p>
				<AppContext.Consumer>
					{(context) => {
						return (
							<div className="task-actions">
								<button className="task__action" onClick={() => {context.updateTaskStatus(id, TASK_COMPLETE)}}>complete</button>
								<button className="task__action" onClick={() => {context.updateTaskStatus(id, TASK_ACTIVE)}}>active</button>
								<button className="task__action" onClick={() => {context.updateTaskStatus(id, TASK_QUEUED)}}>queue</button>
							</div>
						);
					}}
				</AppContext.Consumer>
			</div>
		)
	}
}