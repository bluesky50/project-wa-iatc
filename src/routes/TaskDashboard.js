import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import Body from '../components/TaskDashboard/Body';
import InfoContainer from '../components/common/InfoContainer';

export default class TaskDashboard extends Component {
	render() {
		return (
			<div className="tdc">
				<div className="tdc__header">
					<h3>Task Dashboard</h3>
					<Link to="/events">Events</Link>
					<Link to="/tasks">Tasks</Link>
					<Link to="/threads">Threads</Link>
					<Link to="/sessions">Sessions</Link>
					<h3>Other Info</h3>
				</div>
				<InfoContainer/>
				<Body/>
			</div>
		)
	}
}
