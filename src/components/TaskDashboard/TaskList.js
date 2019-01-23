import React, { Component } from 'react';

import Task from './Task';

import { tasks } from '../../seed/tasks';

export default class TaskList extends Component {
	renderTasks() {
		return tasks.map((task, index) => {
			return <Task key={index} task={task}/>;
		});
	}

	render () {
		return this.renderTasks();
	}
}
