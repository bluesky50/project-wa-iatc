import React, { Component } from 'react';

import Header from '../components/TaskDashboard/Header';
import Body from '../components/TaskDashboard/Body';

export default class TaskDashboard extends Component {
	render() {
		return (
			<div className="tdc">
				<Header/>
				<Body/>
			</div>
		)
	}
}
