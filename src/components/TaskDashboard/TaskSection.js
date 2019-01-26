import React, { Component } from 'react';

import TaskSectionTop from './TaskSectionTop';
import TaskSectionBottom from './TaskSectionBottom';

import { TASK_ACTIVE, TASK_COMPLETE, TASK_QUEUED, TASK_DEFAULT } from '../../helpers/constants';
import { convertTaskStatusToString } from '../../helpers/statusHelpers';

export default class TaskSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tasksStatusSelection: TASK_ACTIVE
		}

		this.toggleTasksSelection = this.toggleTasksSelection.bind(this);
	}

	toggleTasksSelection(status) {
		this.setState({
			tasksStatusSelection: status
		});
	}

	renderSection() {
		switch(this.state.tasksStatusSelection) {
			case TASK_ACTIVE:
				return <TaskSectionTop title={'Active Tasks'} taskStatus={this.state.tasksStatusSelection} />
			case TASK_COMPLETE:
				return <TaskSectionBottom title={"Completed Tasks"} taskStatus={TASK_COMPLETE}/>
			case TASK_QUEUED:
				return <TaskSectionBottom title={"Queued Tasks"} taskStatus={TASK_QUEUED} />
			case TASK_DEFAULT:
				return <TaskSectionBottom title={"New Tasks"} taskStatus={TASK_DEFAULT} />
			default:
				return <TaskSectionTop title={'Active Tasks'} taskStatus={this.state.tasksStatusSelection} />
		}
	}

	render() {
		return (
			<React.Fragment>
				<div className="tdc-section__header">
					<p>{convertTaskStatusToString(this.state.tasksStatusSelection)} Tasks</p>
					<div>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_ACTIVE)}>{convertTaskStatusToString(TASK_ACTIVE)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_QUEUED)}>{convertTaskStatusToString(TASK_QUEUED)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_COMPLETE)}>{convertTaskStatusToString(TASK_COMPLETE)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_DEFAULT)}>{convertTaskStatusToString(TASK_DEFAULT)}</button>
					</div>
				</div>
				<div className="tdc-section__body">
					{this.renderSection()}
				</div>
			</React.Fragment>
		)
	}
}