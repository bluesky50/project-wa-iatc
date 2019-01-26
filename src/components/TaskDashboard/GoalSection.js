import React, { Component } from 'react';

import GoalList from './GoalList';

import { AppContext } from '../../AppContext';
import { convertTaskThreadStatusToString } from '../../helpers/statusHelpers';
import { TASK_THREAD_ACTIVE, TASK_THREAD_QUEUED, TASK_THREAD_COMPLETE, TASK_THREAD_DEFAULT } from '../../helpers/constants';

export default class GoalSection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			taskThreadsStatusSelection: TASK_THREAD_ACTIVE
		}

		this.toggleTasksSelection = this.toggleTasksSelection.bind(this);
	}

	toggleTasksSelection(status) {
		this.setState({
			taskThreadsStatusSelection: status
		});
	}

	render() {
		const { taskThreadsStatusSelection } = this.state;
		return (
			<React.Fragment>
				<div className="tdc-section__header">
					<p>{convertTaskThreadStatusToString(taskThreadsStatusSelection)} Task Threads</p>
					<div>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_THREAD_ACTIVE)}>{convertTaskThreadStatusToString(TASK_THREAD_ACTIVE)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_THREAD_QUEUED)}>{convertTaskThreadStatusToString(TASK_THREAD_QUEUED)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_THREAD_COMPLETE)}>{convertTaskThreadStatusToString(TASK_THREAD_COMPLETE)}</button>
						<button style={{ marginLeft: '6px', color: 'black', height: '20px' }} onClick={() => this.toggleTasksSelection(TASK_THREAD_DEFAULT)}> {convertTaskThreadStatusToString(TASK_THREAD_DEFAULT)}</button>
					</div>
				</div>
				<div className="tdc-section__body">
					<AppContext.Consumer>
						{(context) => {
							// console.log('task-section', context.timedTaskStartEvents);
							const taskThreads = context.taskThreads.filter((taskThread) => {
								return taskThread.status === taskThreadsStatusSelection;
							});
							return <GoalList taskThreads={taskThreads}/>
						}}
					</AppContext.Consumer>		
				</div>
			</React.Fragment>
			// <div className="tdc-section">
			// 	<div className="tdc-section__header">
			// 		<p>{props.title}</p>
			// 	</div>
				
			// </div>
		);
	}
}