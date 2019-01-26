import React, { Component } from 'react';

import TaskInfo from './TaskInfo';

import { AppContext } from '../../AppContext';

import { dailyWorkHours, minutes } from '../../helpers/constants';

import { millisToMinutes } from '../../helpers/time';

export default class TaskListCombo extends Component {
	renderTasks() {
		return (
			<AppContext.Consumer>
				{(context) => {
					return this.props.tasks.map((task) => {

						const totalWorkDuration = context.workSessions.filter((ws) => {
							// console.log('ws / task id', ws.taskId, task.id);
							return ws.taskId === task.id;
						}).map((wsmatched) => (wsmatched.endTime - wsmatched.startTime)).reduce(
							(accumulator, currentValue) => { 
								return accumulator + currentValue 
							}
						, 0);
						// const totalWorkDurationPercent = Math.floor((millisToMinutes(totalWorkDuration) / minutes / dailyWorkHours) * 100);
						const totalWorkDurationPercent = Math.floor((millisToMinutes(totalWorkDuration) / minutes) * 100);
						// console.log('TaskList - work duration calculation in milli', totalWorkDuration);
						// console.log('TaskList - work duration percent calculation ', totalWorkDurationPercent);

						const taskData = {
							timedDuration: 0,
							timedPercent: 0,
							totalWorkDuration,
							totalWorkDurationPercent,
						}

						const actions = {
							clearDurationForTask: this.clearDurationForTask,
							restartInterval: this.restartInterval
						}

						// const actions = {
						// 	clear
						// }

						return (
							<div className="task-container">
								<TaskInfo key={task.id} task={task} actions={actions}/>
							</div>
						)
					});
				}}		
			</AppContext.Consumer>			
		);
	}

	render () {
		return this.renderTasks();
	}
}
