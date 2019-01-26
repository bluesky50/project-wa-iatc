import React, {Component} from 'react';

import { millisToMinutesAndSeconds } from '../../helpers/time';

import { AppContext } from '../../AppContext';

export default class TaskProgress extends Component {

	handleStart(context) {
		console.log("**** calling task.handleStart(" + this.props.task.id + ")");
		this.props.actions.restartInterval();
		context.startTimedTaskEvent(this.props.task.id);
	}

	handleStop(context) {
		this.props.actions.clearDurationForTask(this.props.task.id);
		context.stopTimedTaskEvent(this.props.task.id);
	}

	renderStart() {
		return (
			<AppContext.Consumer>
				{(context) => {
					return <button style={{color: 'black', padding: '5px', marginRight: "5px"}} onClick={() => this.handleStart(context)}>start</button>;
				}}
			</AppContext.Consumer>
		);
	}

	renderStop() {
		return (
			<AppContext.Consumer>
				{(context) => {
					return <button style={{color: 'black', padding: '5px', marginRight: "5px"}} onClick={() => this.handleStop(context)}>stop</button>;
				}}
			</AppContext.Consumer>
		);
	}

	renderButton() {
		const { timedDuration } = this.props.taskData;
		// console.log('task timedduration', timedDuration);
		if (this.props.active) {
			if (timedDuration > 0) {
				return this.renderStop();
			}
			return this.renderStart();
		}
		return null;
	}

	render() {
		const { totalWorkDuration, totalWorkDurationPercent, timedPercent, timedDuration } = this.props.taskData;
		// const classNameString = active ? 'task-progress--active' : 'task-progress--inactive';
		// console.log('task progress - work durations', totalWorkDuration, totalWorkDurationPercent)
		// console.log('task progress - timed durations', timedDuration, timedPercent)
		const classNameString = '';
		const totalWorkDurationStyle = {
			flex: totalWorkDurationPercent 
		}

		const timedDurationStye = {
			flex: timedPercent,
			height: '100%',
			background: 'pink'
		};

		const fillerStyle = {
			flex: 100 - timedPercent - totalWorkDurationPercent
		}

		const durationString = millisToMinutesAndSeconds(timedDuration + totalWorkDuration);

		return (
			<div className="task-progress">
				{this.renderButton()}
				<div className={classNameString + ' task-progress__duration'} style={totalWorkDurationStyle}></div>
				<div style={timedDurationStye}></div> 
				<div className={classNameString + ' task-progress__filler'} style={fillerStyle}>{durationString}</div>
			</div>
		);
	}
}
