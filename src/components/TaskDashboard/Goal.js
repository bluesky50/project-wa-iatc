import React, { Component } from 'react';

import Objective from './Objective';

import { convertTaskThreadStatusToString } from '../../helpers/statusHelpers';
import { AppContext } from '../../AppContext';

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

	renderObjectives(taskGroups) {
		if (this.state.isExpanded) {
			const threadId = this.props.taskThread.id;
			return taskGroups.filter((o1) => {
				return o1.threadId === threadId;
			}).map((o2, index) => {
				return (<Objective key={index} objective={o2}/>);
			});
		}
		return null;
	}

	render() {
		const { id, title, status } = this.props.taskThread;
		const threadId = this.props.taskThread.id;
		
		return (
			<AppContext.Consumer>
				{(context) => {
					const objectivesCount = context.taskGroups.filter((o1) => {
						return o1.threadId === threadId;
					}).length;
					return (
						<div className="goal-container">
							<div className="goal-container__header" onClick={() => this.toggleIsExpanded()}>
								<p>{title} #{id} - o's: {objectivesCount} - status: {convertTaskThreadStatusToString(status)}</p>
							</div>
							{this.renderObjectives(context.taskGroups)}
						</div>
					)
				}}
			</AppContext.Consumer>
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