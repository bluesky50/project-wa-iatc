import React, { Component } from 'react';

import { AppContext } from '../../AppContext';
import { adjustMillisDays } from '../../helpers/time';

import { TASK_COMPLETE } from '../../helpers/constants';

export default class WorkHighlights extends Component {
	render() {
		return (
			<AppContext.Consumer>
				{(context) => {
					const today = new Date(new Date().setHours(0,0,0,0));
					const todayMillis = today.getTime();
					// const now = Date.now();
					const minus7DaysMillis = adjustMillisDays(todayMillis, -7);
					
					const completedTasks7 = context.tasks.filter((t) => {
						return t.status === TASK_COMPLETE && t.completedAt > minus7DaysMillis;
					})

					const completedTasksToday = completedTasks7.filter((t) => {
						return t.status === TASK_COMPLETE && t.completedAt > todayMillis;
					});

					return (
						<div className="tdc__body__right">
							<p>Completed tasks today: ({completedTasksToday.length})</p>
							<p>Completed tasks last 7 days: ({completedTasks7.length})</p>
						</div>
					);
				}}
			</AppContext.Consumer>
		);
	}
}