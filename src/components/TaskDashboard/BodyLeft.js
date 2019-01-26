import React, { Component } from 'react';

import TaskSection from './TaskSection';
import EventSection from './EventSection';

export default class BodyLeft extends Component {
	render() {
		return (
			<div className="tdc__body__left">
				<div className="tdc-section">
					<TaskSection/>
				</div>
				<EventSection title={"Events"}/>
			</div>
		);
	}
}