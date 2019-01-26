import React, { Component } from 'react';

import WorkSession from './WorkSession';

import { AppContext } from '../../AppContext';

export default class WorkSessionList extends Component {
	renderWorkSessions() {
		return (
			<AppContext.Consumer>
				{(context) => {
					return context.workSessions.map((workSession, index) => {
						const task = context.tasks.filter((t) => {
							return t.id === workSession.taskId
						})
						const s = {
							...workSession,
							title: task[0].title
						}
						return <WorkSession key={index} session={s}/>;
					});
				}}
			</AppContext.Consumer>
		)
		
	}

	render() {
		return this.renderWorkSessions();
	}
}
