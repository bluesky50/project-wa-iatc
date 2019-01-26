import React, { Component } from 'react';

import TaskCombo from './TaskCombo';

import { AppContext } from '../../AppContext';

import { dailyWorkHours, minutes } from '../../helpers/constants';

import { millisToMinutes } from '../../helpers/time';

export default class TaskListCombo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			durations: [],
			intervalId: null
		}

		this.clearDurationForTask = this.clearDurationForTask.bind(this);
		this.restartInterval = this.restartInterval.bind(this);
	}

	componentDidMount() {
		const { timedTaskStartEvents } = this.props;
		// console.log('from tasklist', timedTaskStartEvents);
		// if (timedTaskStartEvents.length > 0) {
		// 	console.log('starting interval');
		this.calculateTaskDurations();
		let intervalId = setInterval(this.calculateTaskDurations.bind(this), 1000)
		this.setState({ intervalId: intervalId })
		// }
	}
	
	componentWillUnmount() {
		clearInterval(this.state.intervalId)
	}

	restartInterval() {
		clearInterval(this.state.intervalId)
		this.calculateTaskDurations();
		let intervalId = setInterval(this.calculateTaskDurations.bind(this), 1000)
		this.setState({ intervalId: intervalId })
	}

	calculateTaskDurations() {
		const { timedTaskStartEvents } = this.props;
		if (timedTaskStartEvents.length > 0) {
			const taskDurations = timedTaskStartEvents.map((te) => {
				const dur = Date.now() - te.startTime;
				// const per = Math.floor((millisToMinutes(dur) / minutes / dailyWorkHours) * 100);
				const per = Math.floor((millisToMinutes(dur) / minutes) * 100);
				// console.log('percent', per);
				return {
					taskId: te.taskId,
					timedDuration: dur,
					timedPercent: per
				};
			});

			this.setState({
				durations: taskDurations
			});
		}
	}

	clearDurationForTask(taskId) {
		this.setState({
			durations: this.state.durations.map((d) => {
				if (taskId === d.taskId) {
					return {
						taskId: taskId,
						timedDuration: 0,
						timedPercent: 0
					};
				}
				return d;
			})
		});
	}

	renderTasks() {
		return (
			<AppContext.Consumer>
				{(context) => {
					return this.props.tasks.map((task) => {
						const timedEventsArray = this.state.durations.filter((te) => {
							return task.id === te.taskId;
						});

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

						const taskData = timedEventsArray.length > 0 ? {
							...timedEventsArray[0],
							totalWorkDuration,
							totalWorkDurationPercent,
						} : {
							timedDuration: 0,
							timedPercent: 0,
							totalWorkDuration,
							totalWorkDurationPercent,
						}

						const actions = {
							clearDurationForTask: this.clearDurationForTask,
							restartInterval: this.restartInterval
						}

						return <TaskCombo key={task.id} task={task} taskData={taskData} actions={actions}/>
					});
				}}		
			</AppContext.Consumer>			
		);
	}

	render () {
		return this.renderTasks();
	}
}
