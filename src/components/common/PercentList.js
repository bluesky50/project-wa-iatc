import React, { Component } from 'react';

import PercentProgressBar from './PercentProgressBar';

import { totalMinsInDay, totalMillisecondsInDay, totalWorkHoursInDay } from '../../helpers/time';
import { AppContext } from '../../AppContext';
import { TASK_ACTIVE } from '../../helpers/constants';

export default class PercentList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: this.getTime()
		}
	}

	componentDidMount() {
		this.intervalId = setInterval(
			() => {
				this.setState({
					time: this.getTime()
				});
			},
			60000
		)
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	getTime() {
		return new Date();
	}

	getMinsLeftInDay() {
		return totalMinsInDay - this.getMinsPassedInDay();
	}

	getMinsPassedInDay() {
		return this.getElapsedMilliseconds() / ( 1000 * 60 );
	}

	getElapsedMilliseconds() {
		const { time } = this.state;
		const startDay = new Date(time.getFullYear(), time.getMonth(), time.getDate());
		const elapsed = time - startDay.getTime();
		return elapsed; // this should be milliseconds;
	}

	getPercentDayLeft() {
		return Math.floor((this.getMinsPassedInDay()/totalMinsInDay) * 100);
	}

	getStringValue(elapsedMilliseconds) {
		const diff = new Date(elapsedMilliseconds);
		const hours = diff.getUTCHours();
		const mins = diff.getUTCMinutes();
		return `${hours} hr ${mins} min`;
	}

	getFocusTasksTime(tasks) {
		if (tasks.length > 0) {
			return tasks.map((t) => t.durationEstimate).reduce((accValue, currentValue) => {
				return accValue + currentValue;
			}, 0)
		}
		return 0;
	}

	render() {
		const elapsedMilli = this.getElapsedMilliseconds();
		const timeElapsedString = this.getStringValue(elapsedMilli);
		const timeLeftString = this.getStringValue(totalMillisecondsInDay - elapsedMilli);		
		const percentOfDayPassed = this.getPercentDayLeft()
		
		return (
			<div className="tdc__body__left">
				<div style={styles.barContainer}>
					<p>Time left in the day: [Time elapsed: {timeElapsedString} / Time left: {timeLeftString}]</p>
					<PercentProgressBar percent={percentOfDayPassed} color={'red'}/>
				</div>
				<div style={styles.barContainer}>
					<AppContext.Consumer>
						{(context) => {
							const activeTasks = context.tasks.filter((t) => {
								return t.status === TASK_ACTIVE;
							})
							const totalFocusTime = this.getFocusTasksTime(activeTasks);
							const minsLeftInDay = Math.floor((totalMillisecondsInDay - elapsedMilli) / (1000 * 60));
							const percentTimeLeft = Math.floor((totalFocusTime/minsLeftInDay) * 100);
							return (
								<React.Fragment>
									<p>Estimated time with active tasks ({activeTasks.length}) - [Remaining Task Time: {totalFocusTime} mins / Day remaining: {minsLeftInDay} mins]</p>
									<PercentProgressBar percent={percentTimeLeft} color={'yellow'}/>
								</React.Fragment>
							)
						}}
					</AppContext.Consumer>
				</div>
				<div style={styles.barContainer}>
					<AppContext.Consumer>
						{(context) => {
							const workDayMinutes = totalWorkHoursInDay * 60;
							const totalMillisWorked = context.workSessions.map((ws) => {
								return ws.endTime - ws.startTime;
							}).reduce((a, c) => a + c, 0);
							const totalMinutesWorked = Math.floor(totalMillisWorked / (1000 * 60));
							const workedPercent = Math.floor(((totalMinutesWorked	) / workDayMinutes) * 100);
							return (
								<React.Fragment>
									<p>Total Time Worked: [Current Work Minutes: {totalMinutesWorked} / Total Work Minutes: {workDayMinutes}]</p>
									<PercentProgressBar percent={workedPercent} color={'steelblue'}/>
								</React.Fragment>
							);
						}}
					</AppContext.Consumer>
				</div>
			</div>
		);
	}
}

const styles = {
	barContainer: {
		display: 'flex',
		flexFlow: 'column',
	},
	barTitle: {
		display: 'flex'
	},
	barPercent: {
		display: 'flex'
	}

}