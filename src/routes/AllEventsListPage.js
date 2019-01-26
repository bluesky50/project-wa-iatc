import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext';
import Header from '../components/common/header';

const Event = (props) => {
	const { eventTitle, eventType, objectId, objectType } = props.event;
	return (
		<div style={styles.taskContainer}>
			<p>{eventTitle}</p>
		</div>
	);
}

class EventList extends Component {
	renderEvents() {
		const { events } = this.props;

		return events.map((e) => {
			return <Event key={e.id} event={e} />
		});
	}

	render() {
		return (
			<div style={styles.listContainer}>
				{this.renderEvents()}
			</div>
		);
	}
}

export default class AllEventsListPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			eventTypeSections: [],
			objectTypeSelections: [],
		}
	}

	addContextSelection(eventType) {
		const newEventTypeSections = [...this.state.eventTypeSections, eventType];
		this.setState({
			eventTypeSections: newEventTypeSections
		});
	}

	removeContextSelection(eventType) {
		const newEventTypeSections = this.state.eventTypeSections.filter(et => et === eventType)
		this.setState({
			eventTypeSections: newEventTypeSections
		});
	}

	addTaskStatusSelection(objectType) {
		const newObjectTypeSelections = [...this.state.objectTypeSelections, objectType];
		this.setState({
			objectTypeSelections: newObjectTypeSelections
		});
	}

	removeTaskStatusSelection(objectType) {
		const newObjectTypeSelections = this.state.objectTypeSelections.filter(ot => ot === objectType)
		this.setState({
			objectTypeSelections: newObjectTypeSelections
		});
	}

	render() {
		return (
			<div style={styles.pageContainer}>
				<Link to="/">Dashboard</Link>
				<Header title={"Event List"}/>
				<AppContext.Consumer>
					{(context) => {
						const { objectTypeSelections, eventTypeSections } = this.state;

						let filteredEvents = context.events;
						
						if (objectTypeSelections.length > 0) {
							filteredEvents = filteredEvents.filter((e) => {
								return objectTypeSelections.includes(e.objectType);
							});
						}
						
						if (eventTypeSections.length > 0) {
							filteredEvents = filteredEvents.filter((e) => {
								return eventTypeSections.includes(e.eventType);
							});
						}

						return <EventList events={filteredEvents}/>
					}}
				</AppContext.Consumer>
			</div>
		);
	}
}

const styles = {
	pageContainer: {
		background: 'rgb(28, 39, 53)',
		height: '100vh',
		padding: '10px',
		width: '100%',
	},
	headerContainer: {
		border: '1px solid gray',
		display: 'flex',
		marginBottom: '10px',
		padding: '10px',
		width: '100%'
	},
	listContainer: {
		border: '1px solid gray',
		display: 'flex',
		flexFlow: 'column',
		marginBottom: '10px',
		padding: '4px',
		width: '100%'
	},
	taskContainer: {
		border: '1px solid gray',
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '4px',
		width: '100%',
	}
}
