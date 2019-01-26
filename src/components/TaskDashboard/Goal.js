import React, { Component } from 'react';

import Objective from './Objective';

import { taskGroups } from '../../seed/taskGroups';

import { convertTaskThreadStatusToString } from '../../helpers/statusHelpers';

export default class Goal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false
		}
	}

	toggleIsExpanded() {
		this.setState({
			isExpanded: !this.state.isExpanded
		});
	}

	renderObjectives() {
		if (this.state.isExpanded) {
			const threadId = this.props.taskThread.id;
			return taskGroups.filter((o1) => {
				return o1.threadId === threadId;
			}).map((o2) => {
				return (<Objective objective={o2}/>);
			});
		}
		return null;
	}

	render() {
		const { title, status } = this.props.taskThread;
		const threadId = this.props.taskThread.id;
		const objectivesCount = taskGroups.filter((o1) => {
			return o1.threadId === threadId;
		}).length;
		return (
			<div className="goal-container">
				<div className="goal-container__header" onClick={() => this.toggleIsExpanded()}>
					<p>{title} - o's: {objectivesCount} - status: {convertTaskThreadStatusToString(status)}</p>
				</div>
				{this.renderObjectives()}
			</div>
		);
	}
}

// const Goal = (props) => {
// 	const { title } = props.goal;
// 	return (
// 		<div className="task-container">
// 			<div className="task-info">
// 				<p>{title}</p>
// 			</div>
// 		</div>
// 	);
// }

// export default Goal;