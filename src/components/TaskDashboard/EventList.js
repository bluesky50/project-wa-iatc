import React, { Component } from 'react';

import Event from './Event';

export default class EventList extends Component {
	renderEvents() {
		return this.props.events.map((event) => {
			return <Event key={event.id} event={event}/>;
		});
	}

	render () {
		return this.renderEvents();
	}
}
