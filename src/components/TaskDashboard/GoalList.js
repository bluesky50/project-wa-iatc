import React, { Component } from 'react';

import Goal from './Goal';

export default class GoalList extends Component {
	renderGoals() {
		return this.props.taskThreads.map((taskThread, index) => {
			return <Goal key={index} taskThread={taskThread}/>;
		});
	}

	render () {
		return this.renderGoals();
	}
}
