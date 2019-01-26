import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { AppContext } from '../AppContext';
import Header from '../components/common/header';

const WorkSession = (props) => {
	const { title } = props.workSession;
	return (
		<div style={styles.taskContainer}>
			<p>{title}</p>
		</div>
	);
}

class WorkSessionList extends Component {
	renderWorkSesssions() {
		const { workSessions } = this.props;

		return workSessions.map((ws, index) => {
			return <WorkSession key={index} workSession={ws} />
		});
	}

	render() {
		return (
			<div style={styles.listContainer}>
				{this.renderWorkSesssions()}
			</div>
		);
	}
}

export default class AllTasksListPage extends Component {
	render() {
		return (
			<div style={styles.pageContainer}>
				<Link to="/">Dashboard</Link>
				<Header title={"Tasks List"}/>
				<AppContext.Consumer>
					{(context) => {
						let filteredWorkSessions = context.workSessions;
						return <WorkSessionList workSessions={filteredWorkSessions}/>
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
